import { API } from "../utils/constants";
import axios from "axios";

export function getProducers(payload) {
  return dispatch => {
    return dispatch({
      type: "GET_PRODUCERS",
      payload: axios.get(API.GET_PRODUCERS)
    })
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
}
