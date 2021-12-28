import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.shape};

  padding: 2rem;
  border-radius: 0.25rem;

  -webkit-box-shadow: 1px 4px 16px -6px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 4px 16px -6px rgba(0, 0, 0, 0.57);

  transition: transform 0.4s;

  &:hover {
    transform: scale(1.04);
  }
`;

export const Content = styled.div`
  width: 90%;
`;
export const SideBar = styled.div`
  display: block;
`;

export const Information = styled.div``;

export const Title = styled.h4`
  font-width: bold;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Text = styled.p`
  font-width: regular;
  color: ${({ theme }) => theme.colors.grey};
`;

export const ActionIcons = styled.div``;

export const DeleteButton = styled(AiOutlineDelete)`
  position: relative;
  margin: 0.5rem 0;
  cursor: pointer;
  width: 100%;
  color: ${({ theme }) => theme.colors.attention};
  transition: font-size 0.4s, filter 0.2s;

  &:hover {
    filter: brightness(0.8);
    font-size: 1.2rem;
  }
`;
export const EditButton = styled(AiOutlineEdit)`
  position: relative;
  cursor: pointer;
  width: 100%;
  color: ${({ theme }) => theme.colors.green};
  transition: font-size 0.4s, filter 0.2s;

  &:hover {
    filter: brightness(0.8);
    font-size: 1.2rem;
  }
`;
