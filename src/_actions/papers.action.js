import CONSTANTS from "../utils/constants";
import Axios from "axios";

export function getPapers({
  primary_category,
  offset,
  size,
  start_date,
  end_date
}) {
  return dispatch => {
    return dispatch({
      type: "GET_PAPERS_BY_CATEGORY",
      payload: Axios.get(CONSTANTS.API.PAPERS, {
        params: {
          primary_category,
          offset,
          size,
          start_date,
          end_date
        }
      })
    })
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
}
