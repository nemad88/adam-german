import React from "react";

import { StyledComponents as S } from "./work-info.styles";

const WorkInfo = ({ infoPage, active }) => {
  const workInfos = {
    cool: {
      title: "Cool Clothing",
      text: "This is a demo webshop. Created by ReactJs",
    },

    natours: {
      title: "Natours",
      text:
        "This is a demo travel agency website. Created by ",
    },

    omnifood: {
      title: "Omnifood",
      text: "This is a demo website",
    },
  };

  return (
    <S.Info className={active ? "visible" : null}>
      <h1>{workInfos[infoPage].title}</h1>
      <p>{workInfos[infoPage].text}</p>
    </S.Info>
  );
};

export default WorkInfo;
