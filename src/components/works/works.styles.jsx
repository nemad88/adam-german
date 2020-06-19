import styled, { css } from "styled-components";

import { ReactComponent as EyeSVG } from "../../assets/img/eye.svg";
import { ReactComponent as GithubSVG } from "../../assets/img/github.svg";
import { ReactComponent as InfoSVG } from "../../assets/img/info.svg";

const iconStyle = css`
  width: 50px;
  height: 50px;
  min-width: 50px;
  margin: 10px;
  cursor: pointer;
  path {
    fill: white;
  }

  &:hover path {
    fill: #ffd43c;
  }

  @media screen and (max-width: 850px) {
  }
`;

const WorksContainer = styled.div`
  position: fixed;
  height: 60vh;
  width: 900px;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: white;
  z-index: 3;
  transition: all 1s ease-out;
  opacity: 0;
  overflow-y: scroll;
  z-index: 1;

  &.active {
    opacity: 1;
    z-index: 99;

    @media screen and (max-width: 850px) {
      width: 500px;
    }

    @media screen and (max-width: 550px) {
      width: 95%;
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }
`;

const WorkItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #000e11;
`;

export const EyeIcon = styled(EyeSVG)`
  ${iconStyle}
`;
export const GithubIcon = styled(GithubSVG)`
  ${iconStyle}
`;
export const InfoIcon = styled(InfoSVG)`
  ${iconStyle}
  z-index: 99;
`;

export const Info = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 380px;
  height: 100%;
  background: rgba(0, 14, 17, 0.9);
  opacity: 0;
  transition: all 0.4s ease-out;

  &.visible {
    opacity: 1;
  }
`;

export const StyledComponents = {
  WorksContainer,
  WorkItem,
  EyeIcon,
  GithubIcon,
  InfoIcon,
  IconContainer,
  Info,
};
