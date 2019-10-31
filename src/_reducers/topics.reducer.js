export function getTopics(
  state = {
    processing: false,
    data: {},
    error: false
  },
  action
) {
  switch (action.type) {
    case "GET_TOPICS_PENDING": {
      return {
        ...state,
        processing: true
      };
    }
    case "GET_TOPICS_FULFILLED": {
      return {
        ...state,
        processing: false,
        data: action.payload
      };
    }
    case "GET_TOPICS_REJECTED": {
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

export function createTopics(
  state = {
    processing: false,
    data: {},
    error: false
  },
  action
) {
  switch (action.type) {
    case "CREATE_TOPICS_PENDING": {
      return {
        ...state,
        processing: true
      };
    }
    case "CREATE_TOPICS_FULFILLED": {
      return {
        ...state,
        processing: false,
        data: action.payload
      };
    }
    case "CREATE_TOPICS_REJECTED": {
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

export function deleteTopics(
  state = {
    processing: false,
    data: {},
    error: false
  },
  action
) {
  switch (action.type) {
    case "DELETE_TOPICS_PENDING": {
      return {
        ...state,
        processing: true
      };
    }
    case "DELETE_TOPICS_FULFILLED": {
      return {
        ...state,
        processing: false,
        data: action.payload
      };
    }
    case "DELETE_TOPICS_REJECTED": {
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
