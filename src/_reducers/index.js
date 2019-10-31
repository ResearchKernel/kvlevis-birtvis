import { combineReducers } from "redux";
import { login } from "./auth.reducer";
import {
  describeTopics as topics,
  createTopics,
  deleteTopics
} from "./topics.reducer";
import { getProducers as producers } from "./producer.reducer";

const rootReducer = combineReducers({
  login,

  topics,
  createTopics,
  deleteTopics,

  producers
});

export default rootReducer;
