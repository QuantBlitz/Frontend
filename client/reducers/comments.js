import mock_data from '../assets/mock_data.json'

const initialState = {
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_COMMENT_SUCCESS':
      return state
    case 'POST_COMMENT_FAIL':
      return state
    default:
      return state
  }
}

export default comments
