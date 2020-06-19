import React from "react";

import { StyledComponents as S } from "./background.styles";

const Background = ({ activePageName }) => {
  const pageNames = ["home", "works", "skills", "experience", "contact"];

  const renderedLeftSides = pageNames.map((page) => {
    return (
      <S.LeftSide
        key={page}
        color={page}
        className={page === activePageName ? "visible" : null}
      ></S.LeftSide>
    );
  });

  return (
    <div>
      {renderedLeftSides}
      <S.RightSide></S.RightSide>
      {/* <S.Start></S.Start> */}
    </div>
  );
};

export default Background;
