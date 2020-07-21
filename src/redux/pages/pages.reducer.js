import { PagesActionTypes } from './pages.types';

const INITIAL_STATE = {
  currentPage: 'home',
  pageNames: ['home', 'works', 'skills', 'experience', 'contact'],
  colorsMap: {
    home: '#0091B0',
    works: '#FFD43C',
    skills: '#FF5353',
    experience: '#07E57B',
    contact: '#ACFFE1',
  },
};

const pagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PagesActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default pagesReducer;
