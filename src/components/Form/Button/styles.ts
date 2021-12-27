import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.dark};
  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.9);
  }
`;
