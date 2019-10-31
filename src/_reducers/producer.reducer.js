export function getProducers(
  state = {
    processing: false,
    data: {},
    error: false
  },
  action
) {
  switch (action.type) {
    case "GET_PRODUCERS_PENDING": {
      return {
        ...state,
        processing: true
      };
    }
    case "GET_PRODUCERS_FULFILLED": {
      return {
        ...state,
        processing: false,
        data: action.payload
      };
    }
    case "GET_PRODUCERS_REJECTED": {
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    }
    default:
      return {
        ...state
      };
  }
}

export function describeTopics(
  state = {
    processing: false,
    data: {},
    error: false
  },
  action
) {
  switch (action.type) {
    case "DESCRIBE_TOPICS_PENDING": {
      return {
        ...state,
        processing: true
      };
    }
    case "DESCRIBE_TOPICS_FULFILLED": {
      return {
        ...state,
        processing: false,
        data: action.payload
      };
    }
    case "DESCRIBE_TOPICS_REJECTED": {
      return {
        ...state,
        processing: false,
        error: action.payload
      };
    }
    default:
      return {
        ...state
      };
  }
}
