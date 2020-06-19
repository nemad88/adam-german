import styled from "styled-components";

const HomeContainer = styled.div`
  position: fixed;
  width: 80vw;
  height: 50vh;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 24px;
  color: white;
  z-index: 3;
  background: white;
  transition: all 1s ease-out;
  opacity: 0;
  color: black;
  z-index: 1;

  &.active {
    opacity: 1;
    z-index: 99;
  }
`;

const Hello = styled.div`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
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
  transform: translateY(100%);

  span {
    transform: translateX(-10%) translateY(10%);
    width: 150px;
    height: 2px;
    display: inline-block;
    background: white;
    content: "";
  }
`;

const ICreate = styled.div`
  color: color;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translateX(-50%) translateY(-55%);
  letter-spacing: 10px;
  font-size: 56px;
`;

export const StyledComponents = {
  HomeContainer,
  Hello,
  Adam,
  ICreate,
};
