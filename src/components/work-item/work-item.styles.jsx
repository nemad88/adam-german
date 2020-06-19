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

  &.opened path {
    fill: #aad43c;
  }

  @media screen and (max-width: 550px) {
    width: 30px;
    height: 30px;
  }
`;

const Screenshot = styled.img`
  width: 800px;

  @media screen and (max-width: 850px) {
    width: 400px;
  }

  @media screen and (max-width: 550px) {
    width: 200px;
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

  @media screen and (max-width: 550px) {
    width: 50px;
  }
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
  Screenshot,
  WorkItem,
  EyeIcon,
  GithubIcon,
  InfoIcon,
  IconContainer,
  Info,
};
