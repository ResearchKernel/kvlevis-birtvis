import { combineReducers } from "redux";
import { login } from "./auth.reducer";
import { describeTopics as topics } from "./topics.reducer";

const rootReducer = combineReducers({
  login,
  topics
});

export default rootReducer;
