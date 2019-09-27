import { combineReducers } from "redux";
import { login } from "./auth.reducer";
import { getTopics } from "./topic.reducer";

const rootReducer = combineReducers({
  login,
  getTopics
});

export default rootReducer;
