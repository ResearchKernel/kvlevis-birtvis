export function setHeaderImage(url) {
  return dispatch => {
    return dispatch({
      type: "CHANGE_HEADER_IMAGE",
      payload: Promise.resolve(url)
    })
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
}
