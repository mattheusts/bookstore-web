import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.attention};
`;
export const Content = styled.div``;

export const Message = styled.div`
  display: block;
  text-align: center;

  & > p {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

export const Redirect = styled.div`
  display: block;
`;

export const SubText = styled.p`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.orange};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
