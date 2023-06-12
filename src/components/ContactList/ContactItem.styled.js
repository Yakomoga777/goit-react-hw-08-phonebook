import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;

  width: 280px;

  &:hover {
    /* width: 270px; */
    /* height: 50px; */
    /* border: 2px solid rgba(229, 229, 188); */
    /* margin: -2px -2px -2px -2px;
    border-radius: 10px; */
    /* background-color: rgba(24, 232, 21, 0.24); */
    box-shadow: 0px 0px 15px 0px rgba(43, 201, 202, 0.5);
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;

  &:hover {
    /* width: 270px; */
    /* height: 50px; */
    /* border: 2px solid rgba(229, 229, 188); */
    /* margin: -2px -2px -2px -2px;
    border-radius: 10px; */
    /* background-color: rgba(24, 232, 21, 0.24); */
    box-shadow: 0px 0px 15px 0px rgba(43, 201, 202, 1);
  }
`;

// export const StyledButton = styled.button`
