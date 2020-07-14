import styled from "styled-components";

export const Info = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0px;
  left: 0px;
  width: ${(props) => (props.currentInfo ? "100%" : "0")};
  height: ${(props) => (props.currentInfo ? "222px" : "222px")};
  background: rgba(0, 14, 17, 1);
  font-size: 0;
  opacity: ${(props) => (props.currentInfo ? 1 : 0)};
  transition: all 0.4s ease-out;
  z-index: ${(props) => (props.currentPage ? 98 : 1)};
  padding: 0 100px;
  text-align: center;

  h1 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    overflow: auto;
  }

  a {
    font-size: 12px;
    color: white;
  }
`;

export const StyledComponents = {
  Info,
};
