const initialState = {
  account: {},
  profile: {}
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SETTINGS_SUCCESS':
      return state
    case 'UPDATE_SETTINGS_FAIL':
      return state
    default:
      return state
  }
}

export default settings
