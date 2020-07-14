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
    fill: #ffd43c;
  }

  @media screen and (max-width: 550px) {
    width: 30px;
    height: 30px;
  }
`;

const WorkItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 100px;
  max-width: 1000px;
  
`;

const Screenshot = styled.img`
  width: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  position: absolute;
  top: 0;
  left: 0;
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

export const StyledComponents = {
  Screenshot,
  WorkItem,
  EyeIcon,
  GithubIcon,
  InfoIcon,
  IconContainer,
};
