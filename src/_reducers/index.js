import { combineReducers } from "redux";
import { login } from "./auth.reducer";
import { filterByYears } from "./filters.reducer";
import { searchVisible } from "./searchVisible.reducer";

const rootReducer = combineReducers({
  login,
  filterByYears,
  searchVisible
});

export default rootReducer;
