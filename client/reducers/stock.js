const initialState = {
  isFetching: true,
  isFetchingChart: true,
  inputResults: [],
  portfolio: [],
  watchlist: [],
  trades: [],
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
    case 'GET_STOCK_QUOTE_SUCCESS':
      return {
        ...state,
        isFetching: false,
        inputResults: [],
        quoteData: action.payload
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
    case 'GET_WATCHLIST_SUCCESS':
      return { ...state, watchlist: action.payload.reverse() }
    case 'GET_WATCHLIST_FAIL':
      return state
    case 'GET_PORTFOLIO_SUCCESS':
      return {
        ...state,
        portfolio: action.payload.portfolio.sort((a, b) => a.id < b.id),
        trades: action.payload.trades.sort((a, b) => a.id < b.id)
      }
    case 'GET_PORTFOLIO_FAIL':
      return state
    case 'WATCH_STOCK_SYMBOL_SUCCESS':
      return { ...state, isFetching: true, watchlist: action.payload }
    case 'WATCH_STOCK_SYMBOL_FAIL':
      return state
    case 'BUY_STOCK_SYMBOL_SUCCESS':
      return {
        ...state,
        isFetching: true,
        portfolio: action.payload.portfolio.sort((a, b) => a.id < b.id),
        trades: action.payload.trades.sort((a, b) => a.id < b.id)
      }
    case 'BUY_STOCK_SYMBOL_FAIL':
      return state
    case 'SELL_STOCK_SYMBOL_SUCCESS':
      return {
        ...state,
        isFetching: true,
        portfolio: action.payload.portfolio.sort((a, b) => a.id < b.id),
        trades: action.payload.trades.sort((a, b) => a.id < b.id)
      }
    case 'SELL_STOCK_SYMBOL_FAIL':
      return state
    default:
      return state
  }
}

export default stock
