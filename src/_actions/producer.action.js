export function getProducers(payload) {
  return dispatch => {
    return dispatch({
      type: "GET_PRODUCERS",
      // ## Change here to API call
      // payload: axios.post(CONSTANTS.*)
      payload: Promise.resolve(true)
    })
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
}
