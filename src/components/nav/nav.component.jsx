import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { StyledComponents as S } from "./nav.styles";

import {
  selectPageNames,
  selectCurrentPage,
  selectPageColors,
} from "../../redux/pages/pages.selector";

import { setCurrentPage } from "../../redux/pages/pages.actions";
import { closeAllInfoPage } from "../../redux/works/works.actions";

const Nav = () => {
  const pageNames = useSelector(selectPageNames);
  const currentPage = useSelector(selectCurrentPage);
  const pageColors = useSelector(selectPageColors);

  const dispatch = useDispatch();

  const renderedNavList = pageNames.map((pageName) => {
    return (
      <S.NavElement
        className={pageName === currentPage ? "active" : null}
        color={pageColors[pageName]}
        onClick={() => {
          dispatch(setCurrentPage(pageName));
          dispatch(closeAllInfoPage());
          window.scrollTo(0, 0);
        }}
      >
        {pageName}
      </S.NavElement>
    );
  });

  return <S.NavContainer>{renderedNavList}</S.NavContainer>;
};

export default Nav;
