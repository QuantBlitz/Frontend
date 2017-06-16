const initialState = {
  isFetchingChart: true,
  history: []
}

const symbol = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SYMBOL_CHART_SUCCESS':
      return {
        ...state,
        isFetchingChart: false,
        history: action.payload
      }
    case 'GET_SYMBOL_CHART_FAIL':
      return {
        ...state,
        isFetchingChart: true,
        history: []
      }
    default:
      return state
  }
}

export default symbol
