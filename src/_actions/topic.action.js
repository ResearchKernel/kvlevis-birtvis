export function getTopics(payload) {
    return dispatch => {
        return dispatch({
                type: "GET_TOPICS",
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