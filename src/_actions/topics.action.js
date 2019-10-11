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
      // payload: axios.get(API.DESCRIBE_TOPICS)
      payload: Promise.resolve({
        data: {
          "com.paisabazaar.core.analytics": {
            name: "com.paisabazaar.core.analytics",
            internal: false,
            partitions: [
              {
                partition: 0,
                leader: {
                  id: 0,
                  idString: "0",
                  host: "10.0.12.76",
                  port: 9092,
                  rack: null,
                  hash: null
                },
                replicas: [
                  {
                    id: 0,
                    idString: "0",
                    host: "10.0.12.76",
                    port: 9092,
                    rack: null,
                    hash: null
                  }
                ],
                isr: [
                  {
                    id: 0,
                    idString: "0",
                    host: "10.0.12.76",
                    port: 9092,
                    rack: null,
                    hash: null
                  }
                ]
              }
            ]
          },
          "com.paisabazaar.core.vip-customer-visits": {
            name: "com.paisabazaar.core.vip-customer-visits",
            internal: false,
            partitions: [
              {
                partition: 0,
                leader: {
                  id: 0,
                  idString: "0",
                  host: "10.0.12.76",
                  port: 9092,
                  rack: null,
                  hash: null
                },
                replicas: [
                  {
                    id: 0,
                    idString: "0",
                    host: "10.0.12.76",
                    port: 9092,
                    rack: null,
                    hash: null
                  }
                ],
                isr: [
                  {
                    id: 0,
                    idString: "0",
                    host: "10.0.12.76",
                    port: 9092,
                    rack: null,
                    hash: null
                  }
                ]
              }
            ]
          },
          "com.paisabazaar.core.test": {
            name: "com.paisabazaar.core.test",
            internal: false,
            partitions: [
              {
                partition: 0,
                leader: {
                  id: 0,
                  idString: "0",
                  host: "10.0.12.76",
                  port: 9092,
                  rack: null,
                  hash: null
                },
                replicas: [
                  {
                    id: 0,
                    idString: "0",
                    host: "10.0.12.76",
                    port: 9092,
                    rack: null,
                    hash: null
                  }
                ],
                isr: [
                  {
                    id: 0,
                    idString: "0",
                    host: "10.0.12.76",
                    port: 9092,
                    rack: null,
                    hash: null
                  }
                ]
              }
            ]
          }
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
