const initialState = {
  isFetching: true,
  tradeCount: 0,
  inputResults: [],
  portfolio: [],
  watchlist: [],
  trades: [],
  quoteData: {}
}

const stock = (state = initialState, action) => {
  console.log(action)
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
      return { ...state, isFetching: false, quoteData: action.payload }
    case 'GET_STOCK_QUOTE_FAIL':
      return state
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