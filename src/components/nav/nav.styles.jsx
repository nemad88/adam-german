import styled from "styled-components";

const colorsMap = {
  home: "#0091B0",
  works: "#FFD43C",
  skills: "#FF5353",
  experience: "#07E57B",
  contact: "#ACFFE1",
};

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
  transition-duration: 2s;
  transition-timing-function: ease;
  cursor: pointer;

  @media screen and (max-width: 850px) {
    padding: 5px;
  }

  &.active {
    color: ${(props) => colorsMap[props.color]};
  }

  &:hover,
  &:active {
    letter-spacing: 5px;
  }
`;

export const StyledComponents = {
  NavContainer,
  NavElement,
};
