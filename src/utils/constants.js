// const BASE_URL = "http://localhost:3004/PB_DATAPIPE_ADMIN";
const BASE_URL = "http://10.120.8.9:3004/PB_DATAPIPE_ADMIN";

module.exports = {
  API: {
    GET_TOPICS: BASE_URL + "/get-topics",
    DESCRIBE_TOPICS: BASE_URL + "/describe-topics",
    CREATE_TOPICS: BASE_URL + "/create-topics",
    DELETE_TOPICS: BASE_URL + "/delete-topics",

    GET_CONSUMER_GROUPS: BASE_URL + "/get-consumer-groups",
    DESCRIBE_CONSUMER_GROUPS: BASE_URL + "/describe-consumer-groups",

    GET_PRODUCERS: BASE_URL + "/producer"
  }
};
