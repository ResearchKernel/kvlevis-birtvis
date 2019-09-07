export function searchVisible(
    state = {
      processing: false,
      data: {},
      error: false
    },
    action
  ) {
    switch (action.type) {
      case "SEARCH_VISIBLE_PENDING": {
        return {
          ...state,
          processing: true
        };
      }
      case "SEARCH_VISIBLE_FULFILLED": {
        return {
          ...state,
          processing: false,
          data: action.payload
        };
      }
      case "SEARCH_VISIBLE_REJECTED": {
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
  