export function getPapers(
  state = {
    processing: false,
    data: [],
    error: false
  },
  action
) {
  switch (action.type) {
    case "GET_PAPERS_BY_CATEGORY_PENDING": {
      return {
        ...state,
        processing: true
      };
    }
    case "GET_PAPERS_BY_CATEGORY_FULFILLED": {
      return {
        ...state,
        processing: false,
        data: action.payload.data.result
      };
    }
    case "GET_PAPERS_BY_CATEGORY_REJECTED": {
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
