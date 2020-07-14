import { createSelector } from "reselect";

const selectExperience = (state) => state.experience;

export const selectExperienceList = createSelector(
  [selectExperience],
  (experiences) => experiences.experiences
);
