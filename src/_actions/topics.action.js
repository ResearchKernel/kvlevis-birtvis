import { API } from "../utils/constants";
import axios from "axios";

export function getTopics(payload) {
  return dispatch => {
    return dispatch({
      type: "GET_TOPICS",
      // ## Change here to API call
      payload: axios.get(API.GET_TOPICS)
      //   payload: Promise.resolve(true)
    })
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
}

export function describeTopics() {
  console.log(API.GET_TOPICS);
  return dispatch => {
    return dispatch({
      type: "DESCRIBE_TOPICS",
      // ## Change here to API call
      payload: axios.get(API.DESCRIBE_TOPICS)
    })
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
}

export function createTopics(payload) {
  console.log(API.CREATE_TOPICS);
  return dispatch => {
    return dispatch({
      type: "CREATE_TOPICS",
      // ## Change here to API call
      payload: axios.post(API.CREATE_TOPICS, payload)
    })
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
}

export function deleteTopics(payload) {
  console.log(API.CREATE_TOPICS);
  return dispatch => {
    return dispatch({
      type: "DELETE_TOPICS",
      // ## Change here to API call
      payload: axios.post(API.DELETE_TOPICS, payload)
    })
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
}
