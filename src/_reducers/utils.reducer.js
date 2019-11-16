export function setHeaderImage(
  state = {
    processing: false,
    url:
      "https://yculz33w9skgdkhey8rajqm6-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/blog-banner-mark-data-lake-data-mart.jpg",
    error: false
  },
  action
) {
  switch (action.type) {
    case "CHANGE_HEADER_IMAGE_PENDING": {
      return {
        ...state,
        processing: true
      };
    }
    case "CHANGE_HEADER_IMAGE_FULFILLED": {
      return {
        ...state,
        processing: false,
        url: action.payload
      };
    }
    case "CHANGE_HEADER_IMAGE_REJECTED": {
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
