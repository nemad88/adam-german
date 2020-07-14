import { combineReducers } from "redux";

import worksReducer from "./works/works.reducer";
import pagesReducer from "./pages/pages.reducer";
import skillsReducer from "./skills/skills.reducer";
import experienceReducer from "./experience/experience.reducer";

const rootReducer = combineReducers({
  works: worksReducer,
  pages: pagesReducer,
  skills: skillsReducer,
  experience: experienceReducer,
});

export default rootReducer;
