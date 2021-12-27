import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 1rem;

  &:hover {
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    border-width: 1px;
  }
`;
