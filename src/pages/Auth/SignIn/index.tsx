import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Form/Button/styles';
import { Input } from '../../../components/Form/Input';
import { Container, Title, Form } from './styles';
import { api } from '../../../services/api';
import { setLocalToken, setLocalUsername } from '../../../utils/util';
import { useAuth } from '../../../hook/auth';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <Container>
      <Form onSubmit={login}>
        <Title>Acess your account</Title>

        <Input
          name="email"
          type="text"
          placeholder="Your e-mail"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></Input>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></Input>

        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}

export { SignIn };
