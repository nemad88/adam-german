import { WorksActionTypes } from "./works.types";

export const openInfoPage = (page) => ({
  type: WorksActionTypes.OPEN_INFO_PAGE,
  payload: page,
});

export const closeAllInfoPage = () => ({
  type: WorksActionTypes.CLOSE_ALL_INFO_PAGE,
});
