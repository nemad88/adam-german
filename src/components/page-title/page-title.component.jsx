import React from 'react';
import { useSelector } from 'react-redux';

import { StyledComponents as S } from './page-title.styles';

import {
  selectPageNames,
  selectCurrentPage,
  selectPageColors,
} from '../../redux/pages/pages.selector';

const PageTitle = () => {
  const pageNames = useSelector(selectPageNames);
  const currentPage = useSelector(selectCurrentPage);
  const pageColors = useSelector(selectPageColors);

  const renderedTitles = pageNames.map((pageName) => {
    const length = pageName.length;
    const half = Math.floor(length / 2);
    const leftTitle = pageName.substr(0, half);
    const rightTitle = pageName.substr(half, length);

    return (
      <React.Fragment key={pageName}>
        <S.PageTitleLeft className={pageName === currentPage ? 'active' : null}>
          {leftTitle}
        </S.PageTitleLeft>
        <S.PageTitleRight
          color={pageColors[pageName]}
          className={pageName === currentPage ? 'active' : null}
        >
          {rightTitle}
        </S.PageTitleRight>
      </React.Fragment>
    );
  });
  return renderedTitles;
};

export default PageTitle;
