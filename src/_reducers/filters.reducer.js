export function filterByYears(
  state = {
    processing: false,
    data: {},
    error: false
  },
  action
) {
  switch (action.type) {
    case "FILTER_BY_YEARS_PENDING": {
      return {
        ...state,
        processing: true
      };
    }
    case "FILTER_BY_YEARS_FULFILLED": {
      return {
        ...state,
        processing: false,
        data: action.payload
      };
    }
    case "FILTER_BY_YEARS_REJECTED": {
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
