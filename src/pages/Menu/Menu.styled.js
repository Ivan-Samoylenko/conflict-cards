import styled from 'styled-components';

export const StyledMenu = styled.section`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.li`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;
