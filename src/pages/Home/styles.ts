import { AiOutlineArrowLeft } from 'react-icons/ai';
import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  padding: 2rem;
  justify-content: center;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.green};)}
`;

export const Content = styled.div`
  margin: 5rem 2rem;
`;

export const Information = styled.p`
  margin: 5rem 2rem;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Register = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    svg {
      margin-right: 1.5rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.title};
    transition: filter 0.2s;
    cursor: pointer;
  }

  p:hover {
    filter: brightness(0.7);
  }
`;

export const Icon = styled(AiOutlineArrowLeft)`
  color: ${({ theme }) => theme.colors.green};
  margin-right: 1rem;
  transition: margin 0.4s;
`;

export const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 1rem;
  color: white;
  text-align: center;
`;

export const Rights = styled.div``;
export const Text = styled.p``;
