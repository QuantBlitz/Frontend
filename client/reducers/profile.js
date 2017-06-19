const initialState = {
  trades: []
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE_SUCCESS':
      return {
        ...state,
        trades: action.payload
      }
    case 'GET_PROFILE_FAIL':
      return state
    default:
      return state
  }
}

export default profile
