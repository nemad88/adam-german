import styled, { css } from "styled-components";

export const Info = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0px;
  left: 80px;
  width: 0px;
  height: 100%;
  background: rgba(0, 14, 17, 1);

  opacity: 0;
  transition: all 0.4s ease-out;
  padding-left: 10px;

  &.visible {
    opacity: 1;
    width: 800px;

    @media screen and (max-width: 850px) {
      width: 400px;
    }

    @media screen and (max-width: 550px) {
      width: 200px;
      left: 50px;
    }
  }

  h1 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    overflow: auto;
  }
`;

export const StyledComponents = {
  Info,
};
