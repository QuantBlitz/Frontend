import axios from 'axios'

import { getUserDashboard } from './userActions'

const baseURL = process.env.NODE_ENV === 'development' ?
  'http://localhost:8080/' : 'http://quantblitz.com/'

const config = {
  baseURL,
  withCredentials: true
}

const watchListSuccess = payload => ({ type: 'GET_WATCHLIST_SUCCESS', payload })
const watchListFail = error => ({ type: 'GET_WATCHLIST_FAIL', error })

export const getWatchList = () => {
  const endPoint = '/v1/stock/watchlist'
  return dispatch => {
    axios.get(endPoint, config)
      .then(response => dispatch(watchListSuccess(response.data)))
      .catch(error => dispatch(watchListFail(error.data)))
  }
}

const removeItemSuccess = payload => ({ type: 'REMOVE_WATCHLIST_ITEM_SUCCESS', payload })
const removeItemFail = error => ({ type: 'REMOVE_WATCHLIST_ITEM_FAIL', error })

export const removeWatchlistItem = (symbol) => {
  const endPoint = '/v1/stock/watchlist/' + symbol
}

const portfolioSuccess = payload => ({ type: 'GET_PORTFOLIO_SUCCESS', payload })
const portfolioFail = error => ({ type: 'GET_PORTFOLIO_FAIL', error })

export const getPortfolio = () => {
  const endPoint = '/v1/stock/portfolio'
  return dispatch => {
    axios.get(endPoint, config)
      .then(response => dispatch(portfolioSuccess(response.data)))
      .catch(error => dispatch(portfolioFail(error.data)))
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
    axios.post(endPoint, data, config)
      .then(response => dispatch(stockActionSuccess(action, response.data)))
      .then(() => dispatch(getUserDashboard()))
      .catch(error => dispatch(stockActionFail(action, error.data)))
  }
}
