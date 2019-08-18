import { combineReducers } from "redux";
import { login } from "./auth.reducer";
import { filterByYears } from "./filters.reducer";

const rootReducer = combineReducers({
  login,
  filterByYears
});

export default rootReducer;
