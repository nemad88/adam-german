import React from "react";

import { StyledComponents as S } from "./nav.styles";

const Nav = ({ handleChange, activePage }) => {
  const pageNames = ["home", "works", "skills", "experience", "contact"];

  const renderedNavList = pageNames.map((page) => {
    return (
      <S.NavElement
        className={page === activePage ? "active" : null}
        color={page}
        onClick={() => handleChange(page)}
      >
        {page}
      </S.NavElement>
    );
  });

  return <S.NavContainer>{renderedNavList}</S.NavContainer>;
};

export default Nav;
