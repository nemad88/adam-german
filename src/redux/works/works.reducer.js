import { WorksActionTypes } from "./works.types";

const INITIAL_STATE = {
  openedInfoPage: "",
  workNames: ["cool", "omnifood", "natours"],
  workInfos: {
    cool: {
      title: "Cool Clothing",
      text:
        "This is a self developed demo webshop. Powered by React and Firebase.",
      github: "https://github.com/nemad88/cool-clothing",
      demosite: "https://nemad88.github.io/cool-clothing",
    },

    natours: {
      title: "Natours",
      text:
        "Fictive travel agency. Based on Jonas Schmedtmanns CSS, SASS tutorial video.",
      github: "https://github.com/nemad88/natours",
      demosite: "http://adamgerman.hu/works/natours",
      tutorialUrl: "https://www.udemy.com/advanced-css-and-sass/",
    },

    omnifood: {
      title: "Omnifood",
      text:
        "Fictive food delivery site. Based on Jonas Schmedtmanns CSS tutorial.",
      tutorialUrl:
        "https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/",
      github: "https://github.com/nemad88/omnifood",
      demosite: "http://adamgerman.hu/works/omnifood/",
    },
  },
};

const worksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WorksActionTypes.OPEN_INFO_PAGE:
      return {
        ...state,
        openedInfoPage: action.payload,
      };
    case WorksActionTypes.CLOSE_ALL_INFO_PAGE:
      return {
        ...state,
        openedInfoPage: "",
      };
    default:
      return state;
  }
};

export default worksReducer;
