// ## import API constants

export function login(payload) {
  return dispatch => {
    return dispatch({
      type: "LOGIN",
      // ## Change here to API call
      // payload: axios.post(CONSTANTS.LOGIN_URL)
      payload: Promise.resolve({
        token: "0cb617f1-6c9b-4965-885e-a461e992c811"
      })
    })
      .then(response => {
        setItem("token", response.value.token);
        setItem("auth", true);
        return Promise.resolve({
          token: getItem("token")
        });
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
}

export function logout() {
  deleteItem("token");
  setItem("auth", false);
}

export function isLoggedIn() {
  return getItem("auth") || false;
}

function setItem(key, value) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem(key, value);
  } else {
    alert("LocalStorage not supported by your browser!");
  }
}

function getItem(key) {
  if (typeof Storage !== "undefined") {
    return localStorage.getItem(key);
  } else {
    alert("LocalStorage not supported by your browser!");
  }
}

function deleteItem(key) {
  if (typeof Storage !== "undefined") {
    localStorage.removeItem(key);
  } else {
    alert("LocalStorage not supported by your browser!");
  }
}
