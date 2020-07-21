import { createSelector } from 'reselect';

const selectSkills = (state) => state.skills;

export const selectSkillsList = createSelector(
  [selectSkills],
  (skills) => skills.skills
);

export const selectKeyWords = createSelector(
  [selectSkills],
  (skills) => skills.keyWords
);
