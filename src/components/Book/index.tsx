import {
  Container,
  Content,
  SideBar,
  Information,
  Title,
  Text,
  ActionIcons,
  DeleteButton,
  EditButton,
} from './styles';

interface IBooksProps {
  id: number;
  title: string;
  author: string;
  launchDate: string;
  price: string;
  deletePress: (id: number) => {};
  updatePress: (id: number) => {};
}

function Book({ id, title, author, price, launchDate, deletePress, updatePress }: IBooksProps) {
  return (
    <Container>
      <Content>
        <Information>
          <Title>Title:</Title>
          <Text>{title}</Text>
        </Information>

        <Information>
          <Title>Author:</Title>
          <Text>{author}</Text>
        </Information>

        <Information>
          <Title>Price:</Title>
          <Text>
            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              Number(price)
            )}
          </Text>
        </Information>

        <Information>
          <Title>Release Date:</Title>
          <Text>{new Date(launchDate).toLocaleDateString('pt-BR')}</Text>
        </Information>
      </Content>
      <SideBar>
        <ActionIcons>
          <DeleteButton onClick={() => deletePress(id)}></DeleteButton>
          <EditButton onClick={() => updatePress(id)}></EditButton>
        </ActionIcons>
      </SideBar>
    </Container>
  );
}

export { Book };
