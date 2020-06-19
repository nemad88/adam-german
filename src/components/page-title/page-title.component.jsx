import React from "react";

import { StyledComponents as S } from "./page-title.styles";

const PageTitle = ({ title }) => {
  const pageNames = ["home", "works", "skills", "experience", "contact"];

  console.log("title", title);

  const renderedTitles = pageNames.map((titleItem) => {
    const length = titleItem.length;
    const half = Math.floor(length / 2);
    const leftTitle = titleItem.substr(0, half);
    const rightTitle = titleItem.substr(half, length);

    return (
      <>
        <S.PageTitleLeft className={title === titleItem ? "active" : null}>
          {leftTitle}
        </S.PageTitleLeft>
        <S.PageTitleRight
          color={title}
          className={title === titleItem ? "active" : null}
        >
          {rightTitle}
        </S.PageTitleRight>
      </>
    );
  });

  return renderedTitles;
};

export default PageTitle;
