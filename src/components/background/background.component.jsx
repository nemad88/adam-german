import React from 'react';
import { useSelector } from 'react-redux';

import { StyledComponents as S } from './background.styles';

import {
  selectPageNames,
  selectCurrentPage,
  selectPageColors,
} from '../../redux/pages/pages.selector';

const Background = () => {
  const pageNames = useSelector(selectPageNames);
  const currentPage = useSelector(selectCurrentPage);
  const pageColors = useSelector(selectPageColors);

  const renderedLeftSides = pageNames.map((pageName) => {
    return (
      <S.LeftSide
        key={pageName}
        color={pageColors[pageName]}
        className={pageName === currentPage ? 'visible' : null}
      ></S.LeftSide>
    );
  });

  return (
    <div>
      {renderedLeftSides}
      <S.RightSide></S.RightSide>
    </div>
  );
};

export default Background;
