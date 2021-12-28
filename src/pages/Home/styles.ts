import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 2rem;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.green};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const SwitchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const NightIcon = styled(BsFillMoonFill)`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 1rem;
`;

export const AfternoonIcon = styled(BsFillSunFill)`
  color: ${({ theme }) => theme.colors.yellow};
  margin-right: 1rem;
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
