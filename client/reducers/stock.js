const initialState = {
  isFetching: true,
  isFetchingChart: true,
  inputResults: [],
  latestTrades: [],
  symbolHistory: [],
  quoteData: {}
}

const stock = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_STOCK_DATA':
      return { ...state, isFetching: action.payload }
    case 'SYMBOL_INPUT_SUCCESS':
      return { ...state, inputResults: action.payload }
    case 'SYMBOL_INPUT_FAIL':
      return state
    case 'CLEAR_SYMBOL_INPUT':
      return { ...state, inputResults: [] }
    case 'GET_LATEST_TRADES':
      return {
        ...state,
        latestTrades: JSON.parse(action.payload)
      }
    case 'GET_LATEST_TRADES_FAIL':
      return state
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
        quoteData: undefined
      }
    case 'GET_STOCK_HISTORY_SUCCESS':
      let history = action.payload.map(s => ({
          close: +s.Close, date: s.Date, high: +s.High,
          low: +s.Low, open: +s.Open, symbol: s.Symbol
        })
      )
      return {
        ...state,
        isFetchingChart: false,
        symbolHistory: history
      }
    case 'GET_STOCK_HISTORY_FAIL':
      return {
        ...state,
        isFetchingChart: true,
        symbolHistory: []
      }
    default:
      return state
  }
}

export default stock
