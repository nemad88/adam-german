import styled from 'styled-components';

const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;

  list-style: none;
  position: fixed;
  right: 15px;
  top: 10px;
  z-index: 99;
`;

const NavElement = styled.li`
  color: white;
  padding: 15px;
  position: relative;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  cursor: pointer;

  @media screen and (max-width: 850px) {
    padding: 5px;
  }

  &.active,
  &:hover {
    color: ${(props) => props.color};
  }
`;

export const StyledComponents = {
  NavContainer,
  NavElement,
};
