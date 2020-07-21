import { PagesActionTypes } from './pages.types';

export const setCurrentPage = (page) => ({
  type: PagesActionTypes.SET_CURRENT_PAGE,
  payload: page,
});
