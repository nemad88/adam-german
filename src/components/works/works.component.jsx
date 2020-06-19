import React from "react";

import { StyledComponents as S } from "./works.styles";

import WorkItem from "../work-item/work-item.component";

const Works = ({ activePage }) => {
  const works = ["cool", "omnifood", "natours"];

  const workItems = works.map((work) => {
    return <WorkItem infoPage={work}></WorkItem>;
  });

  return (
    <S.WorksContainer className={activePage === "works" ? "active" : null}>
      {workItems}
    </S.WorksContainer>
  );
};

export default Works;
