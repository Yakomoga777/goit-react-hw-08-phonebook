import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled.button`
  display: block;

  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;

  color: inherit;
  text-decoration: none;
  border: none;
  line-height: 1.4;
  background-color: rgba(43, 201, 202, 0.5);

  &:hover {
    background-color: rgba(43, 201, 202, 1);
  }
`;

export const StyledWelcome = styled.p`
  margin-top: auto;
  margin-bottom: auto;
  /* background-color: #dfb69e; */
  border-bottom: 2px #dfb69e solid;
`;
