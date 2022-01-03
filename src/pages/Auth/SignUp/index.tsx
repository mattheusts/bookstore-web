import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Form/Button/styles';
import { Input } from '../../../components/Form/Input';
import { Container, Title, Form, CreateAccount } from './styles';
import { api } from '../../../services/api';
import { setLocalToken, setLocalUsername } from '../../../utils/util';
import { useAuth } from '../../../hook/auth';
import { InputForm } from '../../../components/InputForm';

type InputForm = {
  usernameMessage: string;
  emailMessage: string;
  passwordMessage: string;
  repeatPasswordMessage: string;
};

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [inputForm, setInputForm] = useState<InputForm>({} as InputForm);

  const { setAuth } = useAuth();

  const history = useNavigate();

  async function login(event: any) {
    event.preventDefault();

    const form = {
      username,
      password,
    };

    try {
      const response = await api.post('/auth/signin', form);

      setLocalToken(JSON.stringify(response.data.token));
      setLocalUsername(JSON.stringify(response.data.username));

      setAuth({ token: response.data.token, username: username });

      history('/books');
    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  function handlePassword(password: string) {
    if (password.length <= 7) {
      setInputForm({
        ...inputForm,
        passwordMessage: 'Password must be at least 8 characters',
      });
    } else {
      setInputForm({
        ...inputForm,
        passwordMessage: '',
      });
    }
  }

  function handleRepeatPassword(repeatPassword: string) {
    if (repeatPassword.length <= 7) {
      setInputForm({
        ...inputForm,
        repeatPasswordMessage: 'Password must be at least 8 characters',
      });
    } else if (repeatPassword !== password) {
      setInputForm({
        ...inputForm,
        repeatPasswordMessage: 'Passwords do not match',
      });
    } else {
      setInputForm({
        ...inputForm,
        repeatPasswordMessage: '',
      });
    }
  }

  return (
    <Container>
      <Form onSubmit={login}>
        <Title>Create your account</Title>

        <Input
          name="name"
          type="text"
          placeholder="Your name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></Input>
        <Input
          name="email"
          type="email"
          placeholder="Your e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></Input>
        <InputForm
          name="password"
          type="password"
          placeholder="Password"
          message={inputForm.passwordMessage}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            handlePassword(event.target.value);
          }}
        ></InputForm>
        <InputForm
          name="repeatPassword"
          type="password"
          placeholder="Repeat your password"
          value={repeatPassword}
          message={inputForm.repeatPasswordMessage}
          onChange={(event) => {
            setRepeatPassword(event.target.value);
            handleRepeatPassword(event.target.value);
          }}
        ></InputForm>
        <Button type="submit">Register</Button>
        <CreateAccount
          onClick={() => {
            history('/signin');
          }}
        >
          Log in
        </CreateAccount>
      </Form>
    </Container>
  );
}

export { SignUp };
