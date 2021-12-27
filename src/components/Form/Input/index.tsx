import { Container, Input as InputForm } from './styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type: string;
}

function Input({ name, placeholder, type, ...rest }: IInputProps) {
  return (
    <Container>
      <InputForm name={name} type={type} placeholder={placeholder} {...rest}></InputForm>
    </Container>
  );
}

export { Input };
