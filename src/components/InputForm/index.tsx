import { InputHTMLAttributes } from 'react';
import { Container, Message } from './styles';
import { Input } from '../Form/Input';

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  message: string;
  name: string;
  placeholder: string;
  type: string;
}

function InputForm({ message, ...rest }: IInputForm) {
  return (
    <Container>
      <Input {...rest} />
      {message && <Message>{message}</Message>}
    </Container>
  );
}

export { InputForm };
