import styled from "styled-components";

const LeftSide = styled.div`
  background: ${(props) => props.color};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 50vw;
  height: 100vh;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  transform: translateX(-100%);
  z-index: 1;

  @media screen and (max-width: 850px) {
    width: 100vw;
    height: 50vh;
    bottom: 0;
    left: 0;
  }

  &.visible {
    z-index: 2;
    opacity: 1;
    transform: translateX(0%);
  }
`;

const RightSide = styled.div`
  background: #000e11;
  position: fixed;
  right: 0;
  top: 0;
  width: 50vw;
  height: 100vh;
  @media screen and (max-width: 850px) {
    width: 100vw;
    height: 50vh;
    top: 0;
    left: 0;
  }
`;

const Start = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: white;
  font-size: 56px;
`;

export const StyledComponents = {
  LeftSide,
  RightSide,
  Start,
};
