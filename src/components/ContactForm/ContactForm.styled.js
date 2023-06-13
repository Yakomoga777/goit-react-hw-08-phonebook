import { StyledButton } from 'components/ContactList/ContactItem.styled';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 200px;
  margin: 10px auto 10px auto;
  justify-content: center;
`;
export const StyledContactInput = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledContactButton = styled(StyledButton)`
  height: 40px;
  padding: 10px;

  line-height: 1;
`;
