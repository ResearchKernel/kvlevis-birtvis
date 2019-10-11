const BASE_URL = "http://localhost:3004/PB_DATAPIPE_ADMIN";

module.exports = {
  API: {
    GET_TOPICS: BASE_URL + "/get-topics",
    DESCRIBE_TOPICS: BASE_URL + "/describe-topics",
    GET_CONSUMER_GROUPS: BASE_URL + "/get-consumer-groups",
    DESCRIBE_CONSUMER_GROUPS: BASE_URL + "/describe-consumer-groups"
  }
};
