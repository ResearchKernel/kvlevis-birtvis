import { combineReducers } from "redux";
import { login } from "./auth.reducer";
import { filterByYears } from "./filters.reducer";
import { setHeaderImage as headerImage } from "./utils.reducer";
import { getPapers as papers } from "./papers.reducer";

const rootReducer = combineReducers({
  login,
  filterByYears,
  headerImage,
  papers
});

export default rootReducer;
