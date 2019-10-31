import { combineReducers } from "redux";
import { login } from "./auth.reducer";
import { describeTopics as topics } from "./topics.reducer";
import { getProducers as producers } from "./producer.reducer";

const rootReducer = combineReducers({
  login,
  topics,
  producers
});

export default rootReducer;
