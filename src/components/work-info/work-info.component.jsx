import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { StyledComponents as S } from "./work-info.styles";

import {
  selectOpenedWorkInfo,
  selectWorkInfos,
} from "../../redux/works/works.selector";

const WorkInfo = ({ infoPageName }) => {
  const openedInfoPage = useSelector(selectOpenedWorkInfo);
  const workInfos = useSelector(selectWorkInfos);

  return (
    <S.Info currentInfo={infoPageName === openedInfoPage}>
      <h1>{workInfos[infoPageName].title}</h1>
      <p>{workInfos[infoPageName].text} </p>
      {workInfos[infoPageName].tutorialUrl ? (
        <Link
          to={{ pathname: workInfos[infoPageName].tutorialUrl }}
          target="_blank"
        >
          Link
        </Link>
      ) : null}
    </S.Info>
  );
};

export default WorkInfo;
