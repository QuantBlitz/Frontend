const initialState = {
  fetching: true,
  portfolioData: {},
  watchlistData: {}
}

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DASHBOARD_SUCCESS':
      return {
        ...state,
        portfolioData: action.payload.portfolio,
        watchlistData: action.payload.watchlist
      }
    case 'GET_DASHBOARD_FAIL':
      return { ...state, isFetching: false }
    default:
      return state
  }
}
