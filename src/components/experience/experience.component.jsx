import React from "react";
import { useSelector } from "react-redux";

import { StyledComponents as S } from "./experience.styles";

import { selectExperienceList } from "../../redux/experience/experience.selector";
import { selectCurrentPage } from "../../redux/pages/pages.selector";

const Experience = () => {
  const experiences = useSelector(selectExperienceList);
  const currentPage = useSelector(selectCurrentPage);

  const renderedExperiences = experiences.map((experience) => {
    const renderedSkills = experience.skills.map((skill) => (
      <S.Skill>{skill}</S.Skill>
    ));

    return (
      <S.Experience>
        <S.CompanyName>{experience.company}</S.CompanyName>
        <S.When>{experience.when}</S.When>
        <S.What>{experience.what}</S.What>
        {renderedSkills}
      </S.Experience>
    );
  });

  return (
    <S.ExperienceContainer currentPage={currentPage === "experience"}>
      {renderedExperiences}
    </S.ExperienceContainer>
  );
};

export default Experience;
