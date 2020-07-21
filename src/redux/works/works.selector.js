import { createSelector } from 'reselect';

const selectWorks = (state) => state.works;

export const selectOpenedWorkInfo = createSelector(
  [selectWorks],
  (works) => works.openedInfoPage
);

export const selectWorkNames = createSelector(
  [selectWorks],
  (works) => works.workNames
);

export const selectWorkInfos = createSelector(
  [selectWorks],
  (works) => works.workInfos
);
