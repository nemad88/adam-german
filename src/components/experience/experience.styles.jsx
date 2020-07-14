import styled from "styled-components";
import { sharedStyles } from "../shared/shared.styles";

const ExperienceContainer = styled.div`
  position: fixed;
  height: 60vh;
  width: 70vw;
  left: 50%;
  top: ${(props) =>
    props.currentPage ? sharedStyles.containerTopPosition : "100%"};
  opacity: ${(props) => (props.currentPage ? 1 : 0)};
  z-index: ${(props) => (props.currentPage ? 99 : 1)};
  transform: translateX(-50%);
  font-size: 24px;
  color: black;
  transition: all 0.2s ease-out 0.5s;
  overflow-y: auto;
  padding: 0 15px;

  @media screen and (max-width: 850px) and (min-height: 500px) {
    top: ${(props) =>
      props.currentPage ? sharedStyles.containerTopMobilePosition : "100%"};
    height: 80vh;
    padding: 0 5px;
  }

  @media screen and (max-width: 550px) {
    width: 95%;
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

export const Experience = styled.div`
  /* background: #07e57b; */
  margin: 0 0 120px 0;
`;

export const CompanyName = styled.h1`
  color: white;
  margin: 0 0 0 0;
`;

export const When = styled.h2`
  max-width: 40%;
  min-width: 280px;
  background: black;
  color: white;
  font-size: 24px;
  margin: 0 0 15px 0;
  padding: 5px 15px 5px 5px;
`;

export const What = styled.div`
  color: white;
  margin: 15px 0;
`;

export const Skill = styled.div`
  display: inline-block;
  background: white;
  color: black;
  margin-right: 10px;
  margin-top: 10px;
  padding: 10px;
  font-size: 18px;
`;

export const StyledComponents = {
  ExperienceContainer,
  Experience,
  CompanyName,
  When,
  What,
  Skill,
};
