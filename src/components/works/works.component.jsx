import React from "react";
import { useSelector } from "react-redux";

import { StyledComponents as S } from "./works.styles";

import WorkItem from "../work-item/work-item.component";

import { selectCurrentPage } from "../../redux/pages/pages.selector";

import { selectWorkNames } from "../../redux/works/works.selector";

const Works = () => {
  const workNames = useSelector(selectWorkNames);
  const currentPage = useSelector(selectCurrentPage);

  const workItems = workNames.map((workName) => {
    return <WorkItem workName={workName}></WorkItem>;
  });

  return (
    <S.WorksContainer currentPage={currentPage === "works"}>
      {workItems}
    </S.WorksContainer>
  );
};

export default Works;
