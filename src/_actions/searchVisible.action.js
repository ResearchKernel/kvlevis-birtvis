export function searchVisible(payload) {
    return dispatch => {
      return dispatch({
        type: "SEARCH_VISIBLE",
        payload: Promise.resolve({
            isSearchVisible: payload
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
  