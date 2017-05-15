import axios from 'axios'

const axiosConfig = {
  baseURL: 'http://localhost:8080/',
  // baseURL: 'http://quantblitz.com/',
  withCredentials: true
}

const getWatchListSuccess = (payload) => {
  return { type: 'GET_WATCHLIST_SUCCESS', payload }
}

const getWatchListFail = (error) => {
  return { type: 'GET_WATCHLIST_FAIL', error }
}

export const getWatchList = () => {
  const endPoint = '/v1/stock/watchlist'
  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(getWatchListSuccess(response.data)))
      .catch(error => dispatch(getWatchListFail(error.data)))
  }
}

const getPortfolioSuccess = (payload) => {
  return { type: 'GET_PORTFOLIO_SUCCESS', payload }
}

const getPortfolioFail = (error) => {
  return { type: 'GET_PORTFOLIO_FAIL', error }
}

export const getPortfolio = () => {
  const endPoint = '/v1/stock/portfolio'
  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(getPortfolioSuccess(response.data)))
      .catch(error => dispatch(getPortfolioFail(error.data)))
  }
}

const stockActionSuccess = (action, payload) => {
  const stockAction = action.toUpperCase()
  return { type: `${stockAction}_STOCK_SYMBOL_SUCCESS`, payload }
}

const stockActionFail = (action, error) => {
  const stockAction = action.toUpperCase()
  return { type: `${stockAction}_STOCK_SYMBOL_FAIL`, error }
}

export const stockAction = (action, data) => {
  const endPoint = `/v1/stock/${action}`

  return dispatch => {
    axios.post(endPoint, data, axiosConfig)
      .then(response => dispatch(stockActionSuccess(action, response.data)))
      .then(() => dispatch(getUserDashboard()))
      .catch(error => dispatch(stockActionFail(action, error.data)))
  }
}
