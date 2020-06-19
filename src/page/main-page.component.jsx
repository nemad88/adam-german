import React, { useState } from "react";

import Background from "../components/background/background.component";
import Nav from "../components/nav/nav.component";
import PageTitle from "../components/page-title/page-title.component";
import Works from "../components/works/works.component";
import Home from "../components/home/home.component";

const MainPage = () => {
  const [activePageName, setActivePageName] = useState("home");

  const handleChangePage = (pageName) => {
    console.log(pageName);
    setActivePageName(pageName);
  };

  return (
    <>
      <Nav handleChange={handleChangePage} activePage={activePageName}></Nav>
      <Background activePageName={activePageName}></Background>
      <PageTitle title={activePageName}></PageTitle>
      <Works activePage={activePageName}></Works>
      <Home activePage={activePageName}></Home>
    </>
  );
};

export default MainPage;
