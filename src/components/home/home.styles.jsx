import styled from "styled-components";

const HomeContainer = styled.div`
  position: fixed;
  width: 80vw;
  height: 40vh;
  top: 50%;
  left: 50%;

  transform: ${(props) =>
    props.currentPage
      ? "translateX(-50%) translateY(-50%)"
      : "translateX(-50%) translateY(100%)"};
  opacity: ${(props) => (props.currentPage ? 1 : 0)};
  z-index: ${(props) => (props.currentPage ? 99 : 1)};

  font-size: 24px;
  color: white;
  z-index: 3;
  background: white;
  transition: all 0.2s ease-out 0.5s;
  color: black;
`;

const Hello = styled.div`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-120%);
`;

const ICreate = styled.div`
  color: color;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  text-align: center;
  transform: translateX(-50%) translateY(-55%);
  letter-spacing: 10px;
  font-size: 56px;

  @media screen and (max-width: 850px) {
    font-size: 40px;
  }
`;

const Adam = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(120%);
`;

export const StyledComponents = {
  HomeContainer,
  Hello,
  Adam,
  ICreate,
};
