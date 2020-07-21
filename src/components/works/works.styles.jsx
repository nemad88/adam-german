import styled from 'styled-components';
import { sharedStyles } from '../shared/shared.styles';

const WorksContainer = styled.div`
  position: fixed;
  height: 60vh;
  width: 90vw;
  max-width: 1100px;

  text-align: center;
  left: 50%;
  top: ${(props) =>
    props.currentPage ? sharedStyles.containerTopPosition : '100%'};
  opacity: ${(props) => (props.currentPage ? 1 : 0)};
  z-index: ${(props) => (props.currentPage ? 99 : 1)};
  transform: translateX(-50%);
  font-size: 24px;
  color: white;
  transition: all 0.2s ease-out 0.5s;
  overflow-y: auto;
  padding: 0 15px;

  @media screen and (max-width: 850px) and (min-height: 500px) {
    top: ${(props) =>
      props.currentPage ? sharedStyles.containerTopMobilePosition : '100%'};
    height: 80vh;
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

export const StyledComponents = {
  WorksContainer,
};
