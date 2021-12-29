import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import { Container, Header, Title, Content, Message, Text, SubText, Redirect } from './styles';
import NotFoundLottie from '../../assets/lotties/error-not-found.json';

function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFoundLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const history = useNavigate();

  return (
    <Container>
      <Header>
        <Title>401</Title>
      </Header>
      <Content>
        <Message>
          <Text>Error! página não encontrada!</Text>
          <Redirect>
            <SubText onClick={() => history('/')}>
              Click aqui para voltar à página principal!
            </SubText>
          </Redirect>
        </Message>
        <Lottie options={defaultOptions} height={400} width={400} />
      </Content>
    </Container>
  );
}

export { NotFound };
