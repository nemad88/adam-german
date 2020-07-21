import styled, { css } from 'styled-components';

import { ReactComponent as GitHubSVG } from '../../assets/img/github.svg';
import { ReactComponent as MailSVG } from '../../assets/img/mail.svg';
import { ReactComponent as CVSVG } from '../../assets/img/CV.svg';
import { ReactComponent as LinkedInSVG } from '../../assets/img/linkedin.svg';

const iconStyle = css`
  width: 127px;
  height: 127px;
  margin: 80px;
  cursor: pointer;

  &:hover path {
    fill: #ffd43c;
  }

  &.opened path {
    fill: #ffd43c;
  }

  @media screen and (max-width: 850px) {
    width: 90px;
    height: 90px;
    margin: 50px;
  }

  @media screen and (max-width: 550px) {
    width: 80px;
    height: 80px;
    margin: 30px;
  }
`;

export const GitHubIcon = styled(GitHubSVG)`
  ${iconStyle}
`;

export const LinkedInIcon = styled(LinkedInSVG)`
  ${iconStyle}
`;

export const CVIcon = styled(CVSVG)`
  ${iconStyle}
`;

export const MailIcon = styled(MailSVG)`
  ${iconStyle}
`;

export const IconContainerLeft = styled.div`
  position: fixed;
  top: ${(props) => (props.currentPage ? '50%' : '100%')};
  opacity: ${(props) => (props.currentPage ? 1 : 0)};
  z-index: ${(props) => (props.currentPage ? 99 : 1)};
  left: 25%;
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.2s ease-out 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    top: ${(props) => (props.currentPage ? '75%' : '100%')};
    opacity: ${(props) => (props.currentPage ? 1 : 0)};
    z-index: ${(props) => (props.currentPage ? 99 : 1)};
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  path {
    fill: #000e11;
  }
`;

export const IconContainerRight = styled.div`
  position: fixed;
  top: ${(props) => (props.currentPage ? '50%' : '100%')};
  opacity: ${(props) => (props.currentPage ? 1 : 0)};
  z-index: ${(props) => (props.currentPage ? 99 : 1)};
  left: 75%;
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.2s ease-out 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    transition: all 0.1s ease-out 0.5s;
    top: ${(props) => (props.currentPage ? '25%' : '100%')};
    opacity: ${(props) => (props.currentPage ? 1 : 0)};
    z-index: ${(props) => (props.currentPage ? 99 : 1)};
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  path {
    fill: #acffe1;
  }
`;

export const StyledComponents = {
  GitHubIcon,
  LinkedInIcon,
  CVIcon,
  MailIcon,
  IconContainerLeft,
  IconContainerRight,
};
