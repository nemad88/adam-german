import styled from "styled-components";
import { sharedStyles } from "../shared/shared.styles";

const SkillsContainer = styled.div`
  position: fixed;
  width: 90vw;
  height: 60vh;
  top: 25%;
  left: 50%;

  top: ${(props) =>
    props.currentPage ? sharedStyles.containerTopPosition : "100%"};
  opacity: ${(props) => (props.currentPage ? 1 : 0)};
  z-index: ${(props) => (props.currentPage ? 99 : 1)};

  transform: translateX(-50%);
  font-size: 24px;
  color: black;
  z-index: 3;
  transition: all 0.2s ease-out 0.5s;
  overflow-y: scroll;
  padding: 0 15px;

  @media screen and (max-width: 850px) and (min-height: 500px) {
    top: ${(props) =>
      props.currentPage ? sharedStyles.containerTopMobilePosition : "100%"};
    height: 80vh;
    padding-bottom: 80px;
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

  .skill-line {
    margin: 0 0 20px 0;
    display: block;
    /* border: 5px solid white;
  border-left: none;
  border-right: none; */
    background: white;
    padding: 15px;

    mark {
      font-weight: bold;
      background: inherit;
      /* color: white;
      background: black; */
    }
  }
`;

export const StyledComponents = {
  SkillsContainer,
};
