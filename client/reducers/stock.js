const initialState = {
  isFetching: true,
  inputResults: [],
  latestTrades: [],
  quoteData: {}
}

const stock = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_STOCK_DATA':
      return { ...state, isFetching: action.payload }
    case 'SYMBOL_INPUT_SUCCESS':
      return { ...state, inputResults: action.payload }
    case 'SYMBOL_INPUT_FAIL':
      return { ...state, inputResults: [] }
    case 'CLEAR_SYMBOL_INPUT':
      return { ...state, inputResults: [] }
    case 'GET_LATEST_TRADES':
      return {
        ...state,
        latestTrades: JSON.parse(action.payload)
      }
    case 'GET_LATEST_TRADES_FAIL':
      return state
    case 'CLEAR_QUOTE_DATA':
      return { ...state, isFetching: true, quoteData: {} }
    case 'GET_STOCK_QUOTE_SUCCESS':
      return {
        ...state,
        isFetching: false,
        inputResults: [],
        quoteData: action.payload.quote
      }
    case 'GET_STOCK_QUOTE_FAIL':
      return {
        ...state,
        inputResults: [],
        quoteData: {}
      }
    default:
      return state
  }
}

export default stock
