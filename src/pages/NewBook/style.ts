import { AiOutlineLeft } from 'react-icons/ai';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 70%;
  margin: 5rem auto;
  /* background: ${({ theme }) => theme.colors.shape};
  padding: 2rem;
  -webkit-box-shadow: 1px 4px 16px -6px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 4px 16px -6px rgba(0, 0, 0, 0.57); */
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.grey};
`;
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.dark};
`;

export const Back = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  font-width: regular;
  cursor: pointer;
`;

export const SideBar = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:last-child {
    display: flex;
    text-align: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 60%;
`;

export const Form = styled.form``;

export const Icon = styled(AiOutlineLeft)`
  color: ${({ theme }) => theme.colors.green};
  margin-right: 0.5rem;
  font-size: 1.2rem;
`;
