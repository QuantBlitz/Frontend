const initialState = {
  isFetching: true,
  stocks: [],
  watchlist: [],
  trades: []
}

const portfolio = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WATCHLIST_SUCCESS':
      return {
        ...state,
        watchlist: action.payload
      }
    case 'GET_WATCHLIST_FAIL':
      return state
    case 'GET_PORTFOLIO_SUCCESS':
      return {
        ...state,
        portfolio: action.payload.portfolio,
        trades: action.payload.trades
      }
    case 'GET_PORTFOLIO_FAIL':
      return state
    case 'WATCH_STOCK_SYMBOL_SUCCESS':
      return {
        ...state,
        isFetching: true,
        watchlist: action.payload
      }
    case 'WATCH_STOCK_SYMBOL_FAIL':
      return state
    case 'BUY_STOCK_SYMBOL_SUCCESS':
      return {
        ...state,
        isFetching: true,
        portfolio: action.payload.portfolio,
        trades: action.payload.trades
      }
    case 'BUY_STOCK_SYMBOL_FAIL':
      return state
    case 'SELL_STOCK_SYMBOL_SUCCESS':
      return {
        ...state,
        isFetching: true,
        portfolio: action.payload.portfolio,
        trades: action.payload.trades
      }
    case 'SELL_STOCK_SYMBOL_FAIL':
      return state
    default:
      return state
  }
}

export default portfolio
