import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import CoolClothing from "../../assets/img/cool-clothing.png";
import OmniFood from "../../assets/img/omnifood.png";
import Natours from "../../assets/img/natours.png";
import WorkInfo from "../work-info/work-info.component";
import { StyledComponents as S } from "./work-item.styles";

import {
  selectOpenedWorkInfo,
  selectWorkInfos,
} from "../../redux/works/works.selector";

import {
  closeAllInfoPage,
  openInfoPage,
} from "../../redux/works/works.actions";

const WorkItem = ({ workName }) => {
  const works = {
    cool: CoolClothing,
    natours: Natours,
    omnifood: OmniFood,
  };

  const dispatch = useDispatch();
  const openedInfoPage = useSelector(selectOpenedWorkInfo);
  const workInfos = useSelector(selectWorkInfos);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <S.WorkItem>
      <S.IconContainer>
        <Link to={{ pathname: workInfos[workName].demosite }} target="_blank">
          <S.EyeIcon />
        </Link>

        <Link to={{ pathname: workInfos[workName].github }} target="_blank">
          <S.GithubIcon />
        </Link>

        <S.InfoIcon
          className={openedInfoPage === workName ? "opened" : null}
          onClick={() => {
            if (openedInfoPage === workName) {
              dispatch(dispatch(closeAllInfoPage()));
            } else {
              dispatch(dispatch(openInfoPage(workName)));
            }
          }}
        />
      </S.IconContainer>
      <WorkInfo infoPageName={workName} />
      <S.Screenshot src={works[workName]}></S.Screenshot>
    </S.WorkItem>
  );
};

export default WorkItem;
