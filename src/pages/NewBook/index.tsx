import { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container, Title, Description, Back, SideBar, Content, Form, Icon } from './style';
import { Button } from '../../components/Form/Button/styles';
import { Input } from '../../components/Form/Input';
import { api } from '../../services/api';
import { useAuth } from '../../hook/auth';

function NewBook() {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [price, setPrice] = useState('');

  const [message, setMessage] = useState('');

  const history = useNavigate();
  const { id: bookId } = useParams();

  const { token } = useAuth();

  useEffect(() => {
    if (!bookId) {
      setMessage('Add');
      return;
    }

    setMessage('Update');

    async function loadBook() {
      try {
        const response = await api.get(`/api/book/v1/${bookId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { id, title, author, launchDate, price } = response.data;
        setId(id);
        setTitle(title);
        setAuthor(author);
        setLaunchDate(launchDate.split('T')[0]);
        setPrice(price);
      } catch (error) {
        alert('Não foi possível carregar o livro');
      }
    }

    loadBook();
  }, []);

  async function createOrUpdate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!bookId) {
      await create();
      return;
    }

    await update();
  }

  async function create() {
    const data = {
      author,
      launchDate,
      price,
      title,
    };

    try {
      const response = await api.post(`/api/book/v1`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      history('/books');
    } catch (error) {
      alert('Não foi possível cadastrar o livro');
    }
  }

  async function update() {
    const data = {
      id,
      title,
      author,
      launchDate,
      price,
    };

    try {
      const response = await api.put(`/api/book/v1`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      history('/books');
    } catch (error) {
      alert('Não foi possível atualizar o livro');
    }
  }

  return (
    <Container>
      <SideBar>
        <div>
          <Title>{message} new book</Title>
          <Description>Enter the book information and click on '{message}'</Description>
        </div>
        <div>
          <Icon />
          <Back
            onClick={() => {
              history('/books');
            }}
          >
            {' '}
            Home
          </Back>
        </div>
      </SideBar>
      <Content>
        <Form onSubmit={createOrUpdate}>
          <Input
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Input
            name="author"
            type="text"
            placeholder="Author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
          <Input
            name="date"
            type="date"
            placeholder="Data"
            value={launchDate}
            onChange={(event) => setLaunchDate(event.target.value)}
          />
          <Input
            name="price"
            type="numeric"
            placeholder="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />

          <Button type="submit">{message}</Button>
        </Form>
      </Content>
    </Container>
  );
}

export { NewBook };
