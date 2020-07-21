import React from 'react';
import { useSelector } from 'react-redux';

import { StyledComponents as S } from './skills.styles';

import {
  selectSkillsList,
  selectKeyWords,
} from '../../redux/skills/skills.selector';
import { selectCurrentPage } from '../../redux/pages/pages.selector';

import Highlighter from 'react-highlight-words';

const Skills = () => {
  const skills = useSelector(selectSkillsList);
  const keyWords = useSelector(selectKeyWords);
  const currentPage = useSelector(selectCurrentPage);

  const renderedSkills = skills.map((skill) => {
    return (
      <Highlighter
        key={skill}
        className="skill-line"
        highlightClassName="highlight"
        searchWords={keyWords}
        textToHighlight={skill}
      ></Highlighter>
    );
  });

  return (
    <S.SkillsContainer currentPage={currentPage === 'skills'}>
      {renderedSkills}
    </S.SkillsContainer>
  );
};

export default Skills;
