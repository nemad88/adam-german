import React from "react";

import { StyledComponents as S } from "./home.styles";

const Home = ({ activePage }) => {
  return (
    <S.HomeContainer className={activePage === "home" ? "active" : null}>
      <S.Hello>hello</S.Hello>
      <S.ICreate>i create websites</S.ICreate>
      <S.Adam>
        <span>&nbsp; </span> Adam
      </S.Adam>
    </S.HomeContainer>
  );
};

export default Home;
