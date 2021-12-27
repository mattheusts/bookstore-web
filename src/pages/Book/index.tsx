import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book } from '../../components/Book';
import { Button } from '../../components/Form/Button/styles';
import { useAuth } from '../../hook/auth';
import { api } from '../../services/api';
import { setLocalToken, setLocalUsername } from '../../utils/util';
import {
  Container,
  Header,
  Message,
  Action,
  UserName,
  Content,
  ExitAction,
  ExitActionIcon,
  Text,
} from './styles';

interface Books {
  id: number;
  title: string;
  author: string;
  launchDate: string;
  price: string;
}

function Books() {
  const [books, setBooks] = useState<Books[]>();
  const { token, username, setAuth } = useAuth();

  const history = useNavigate();

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await api.get('/api/book/v1', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // params: {
          //   page: 1,
          //   limit: 4,
          //   direction: 'asc',
          // },
        });

        setBooks(response.data);
      } catch (error) {
        alert('Não foi possível carregar os livros');
      }
    }

    loadPosts();
  }, []);

  async function deleteBook(id: number) {
    try {
      await api.delete(`/api/book/v1/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBooks(books!.filter((book) => book.id !== id));
    } catch (errro) {
      alert('Não foi possível deletar o livro');
    }
  }

  async function updateBook(id: number) {
    history(`/books/update/${id}`);
  }

  async function logout() {
    setLocalToken('');
    setLocalUsername('');
    setAuth({});
    history('/');
  }

  return (
    <Container>
      <Header>
        <Message>
          Welcome, <UserName>{username?.replaceAll('"', '')}!</UserName>
        </Message>
        <Action>
          <Button
            onClick={() => {
              history('/new');
            }}
          >
            Add New Book
          </Button>
          <ExitAction>
            <ExitActionIcon
              onClick={() => {
                logout();
              }}
            />
          </ExitAction>
        </Action>
      </Header>
      <Text>Registred Books</Text>
      <Content>
        {books &&
          books.map((book) => (
            <Book key={book.id} {...book} deletePress={deleteBook} updatePress={updateBook} />
          ))}
      </Content>
    </Container>
  );
}

export { Books };
