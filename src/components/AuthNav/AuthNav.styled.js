import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
  display: block;

  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;

  color: inherit;
  text-decoration: none;
  /* border: 1px gray solid; */
  line-height: 1.4;
  background-color: rgba(43, 201, 202, 0.5);

  &:hover {
    background-color: rgba(43, 201, 202, 1);
  }
`;
