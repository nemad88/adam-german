import React from "react";

import { useSelector } from "react-redux";

import { selectCurrentPage } from "../../redux/pages/pages.selector";

import { StyledComponents as S } from "./home.styles";

const Home = () => {
  const currentPage = useSelector(selectCurrentPage);

  return (
    <S.HomeContainer currentPage={currentPage === "home"}>
      <S.Hello>hello</S.Hello>
      <S.ICreate>i create websites</S.ICreate>
      <S.Adam>Adam</S.Adam>
    </S.HomeContainer>
  );
};

export default Home;
