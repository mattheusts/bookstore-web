import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  margin: 2rem 0;
  width: 40%;
`;

export const CreateAccount = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  float: right;
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.2s filter;

  &:hover {
    filter: brightness(0.8);
  }
`;
