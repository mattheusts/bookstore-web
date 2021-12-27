import styled from 'styled-components';
import { AiOutlinePoweroff } from 'react-icons/ai';

export const Container = styled.div`
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;

  padding: 1rem 10%;
  justify-content: space-between;
`;

export const Message = styled.span`
  color: ${({ theme }) => theme.colors.dark};
`;
export const UserName = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;
`;

export const Action = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

export const ExitAction = styled.div`
  display: flex;
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
`;

export const ExitActionIcon = styled(AiOutlinePoweroff)`
  font-size: 2rem;

  color: ${({ theme }) => theme.colors.attention};
  cursor: pointer;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.8);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  width: 80%;
  margin: 3rem auto;
`;

export const Text = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: bold;
`;
