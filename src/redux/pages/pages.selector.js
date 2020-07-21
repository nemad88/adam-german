import { createSelector } from 'reselect';

const selectPages = (state) => state.pages;

export const selectCurrentPage = createSelector(
  [selectPages],
  (pages) => pages.currentPage
);

export const selectPageNames = createSelector(
  [selectPages],
  (pages) => pages.pageNames
);

export const selectPageColors = createSelector(
  [selectPages],
  (pages) => pages.colorsMap
);
