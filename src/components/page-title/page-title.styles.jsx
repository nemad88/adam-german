import styled from "styled-components";

const colorsMap = {
  home: "#0091B0",
  works: "#FFD43C",
  skills: "#FF5353",
  experience: "#07E57B",
  contact: "#ACFFE1",
};

const PageTitleLeft = styled.h1`
  color: #000e11;
  z-index: 999;
  position: fixed;
  font-size: 36px;
  top: 10%;
  right: 100%;
  transition: all 0.5s ease-out;
  opacity: 0;

  &.active {
    right: 50%;
    opacity: 1;
  }

  @media screen and (max-width: 850px) {
    color: white;
    display: none;
  }
`;

const PageTitleRight = styled.h1`
  color: ${(props) => colorsMap[props.color]};
  z-index: 999;
  position: fixed;
  font-size: 36px;
  top: 10%;
  left: 100%;
  transition: all 0.5s ease-out;
  opacity: 0;

  &.active {
    left: 50%;
    opacity: 1;
  }

  @media screen and (max-width: 850px) {
    color: white;
    display: none;
  }
`;

export const StyledComponents = {
  PageTitleLeft,
  PageTitleRight,
};
