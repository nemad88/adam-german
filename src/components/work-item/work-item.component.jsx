import React, { useState, useLayoutEffect } from "react";

import CoolClothing from "../../assets/img/cool-clothing.png";
import OmniFood from "../../assets/img/omnifood.png";
import Natours from "../../assets/img/natours.png";
import WorkInfo from "../work-info/work-info.component";
import { StyledComponents as S } from "./work-item.styles";

const WorkItem = ({ infoPage }) => {
  const [active, setActive] = useState(false);

  const works = {
    cool: CoolClothing,
    natours: Natours,
    omnifood: OmniFood,
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <S.WorkItem>
      <S.IconContainer>
        <S.EyeIcon />
        <S.GithubIcon />
        <S.InfoIcon
          className={active ? "opened" : null}
          onClick={() => {
            setActive(!active);
          }}
        />
        <WorkInfo
          infoPage={infoPage}
          active={active}
          className={active ? "visible" : null}
        />
      </S.IconContainer>
      <S.Screenshot src={works[infoPage]}></S.Screenshot>
    </S.WorkItem>
  );
};

export default WorkItem;
