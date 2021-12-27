import { Container, Button as ButtonForm } from './styles';

interface IButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  name: string;
  type: 'button' | 'submit' | 'reset';
}

function Button({ name, type, ...rest }: IButtonProps) {
  return (
    <Container>
      <ButtonForm name={name} type={type} {...rest}></ButtonForm>
    </Container>
  );
}

export { Button };
