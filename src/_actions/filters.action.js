export function filterByYears(payload) {
  return dispatch => {
    return dispatch({
      type: "FILTER_BY_YEARS",
      // ## Change here to API call
      // payload: axios.post(CONSTANTS.FILER_BY_YEARS)
      payload: Promise.resolve({
        posts: [
          {
            authors: "Tushar Mudgal, Prakritidev Verma",
            publishedDate: new Date().toLocaleDateString(),
            heading:
              "Deep Learning and Neural Networks Classification techniques"
          },
          {
            authors: "Tushar Mudgal, Prakritidev Verma",
            publishedDate: new Date().toLocaleDateString(),
            heading: "Kafka at Production, with security auditing techniques"
          },
          {
            authors: "Tushar Mudgal, Prakritidev Verma",
            publishedDate: new Date().toLocaleDateString(),
            heading: "Kafka scaling"
          },
          {
            authors: "Tushar Mudgal, Prakritidev Verma",
            publishedDate: new Date().toLocaleDateString(),
            heading: "JavaScript design patterns"
          },
          {
            authors: "Tushar Mudgal, Prakritidev Verma",
            publishedDate: new Date().toLocaleDateString(),
            heading: "Java Design patterns"
          },
          {
            authors: "Tushar Mudgal, Prakritidev Verma",
            publishedDate: new Date().toLocaleDateString(),
            heading:
              "Deep Learning and Neural Networks Classification techniques"
          },
          {
            authors: "Tushar Mudgal, Prakritidev Verma",
            publishedDate: new Date().toLocaleDateString(),
            heading: "Kafka at Production, with security auditing techniques"
          },
          {
            authors: "Tushar Mudgal, Prakritidev Verma",
            publishedDate: new Date().toLocaleDateString(),
            heading: "Kafka scaling"
          },
          {
            authors: "Tushar Mudgal, Prakritidev Verma",
            publishedDate: new Date().toLocaleDateString(),
            heading: "JavaScript design patterns"
          },
          {
            authors: "Tushar Mudgal, Prakritidev Verma",
            publishedDate: new Date().toLocaleDateString(),
            heading: "Java Design patterns"
          }
        ]
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
