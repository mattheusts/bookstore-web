import { useNavigate } from 'react-router-dom';
import Switch from 'react-switch';
import { useAuth } from '../../hook/auth';
import { useThemeSwitch } from '../../hook/ThemeSwitchContext';
import {
  Container,
  Header,
  Title,
  Content,
  Information,
  Register,
  Icon,
  Footer,
  Rights,
  Text,
  SwitchButton,
  NightIcon,
  AfternoonIcon,
} from './styles';

function Home() {
  const { token } = useAuth();
  const { toggleTheme, theme } = useThemeSwitch();

  const history = useNavigate();

  return (
    <Container>
      <Header>
        <Title>Bem vindo à livraria!</Title>
        <SwitchButton>
          <AfternoonIcon />
          <Switch
            onChange={toggleTheme}
            checked={theme.title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={theme.colors.dark}
            onColor={theme.colors.primary}
          ></Switch>
          <NightIcon />
        </SwitchButton>
      </Header>
      <Content>
        <Information>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Information>
        <Register>
          <Icon />
          <Text
            onClick={() => {
              history(token ? '/books' : '/signin');
            }}
          >
            {token ? 'View books' : 'Create a account'}
          </Text>
        </Register>
      </Content>
      <Footer>
        <Rights>
          <Text>Community © 2021.</Text>
        </Rights>
      </Footer>
    </Container>
  );
}

export { Home };
