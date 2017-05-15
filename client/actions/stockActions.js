import axios from 'axios'

import { getUserDashboard } from './userActions'

const axiosConfig = {
  baseURL: 'http://localhost:8080/',
  // baseURL: 'http://quantblitz.com/',
  withCredentials: true
}

export const isFetching = (bool) => {
  return { type: 'FETCHING_STOCK_DATA', payload: bool }
}

const getSymbolInputSuccess = (payload) => {
  return { type: 'SYMBOL_INPUT_SUCCESS', payload }
}

const getSymbolInputFail = (error) => {
  return { type: 'SYMBOL_INPUT_FAIL', error }
}

export const getSymbolInput = (input) => {
  const endPoint = `/v1/stock/input/${input}`

  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(getSymbolInputSuccess(response.data)))
      .catch(error => dispatch(getSymbolInputFail(error.data)))
  }
}

export const clearSymbolInput = () => {
  return { type: 'CLEAR_SYMBOL_INPUT' }
}

export const getLatestTrades = (payload) => {
  return { type: 'GET_LATEST_TRADES_SUCCESS', payload }
}

const getStockQuoteSuccess = (payload) => {
  return { type: 'GET_STOCK_QUOTE_SUCCESS', payload }
}

const getStockQuoteFail = (error) => {
  return { type: 'GET_STOCK_QUOTE', error }
}

export const getStockQuote = (symbol) => {
  const endPoint = `/v1/stock/quote/${symbol}`

  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(getStockQuoteSuccess(response.data)))
      .catch(error => dispatch(getStockQuoteFail(error.data)))
  }
}

const getStockHistorySuccess = (payload) => {
  return { type: 'GET_STOCK_HISTORY_SUCCESS', payload }
}

const getStockHistoryFail = (error) => {
  return { type: 'GET_STOCK_HISTORY_FAIL', error }
}

export const getStockHistory = (symbol, start, end) => {
  const endPoint = `/v1/stock/history/${symbol}?start=${start}&end=${end}`
  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(getStockHistorySuccess(response.data)))
      .catch(error => dispatch(getStockHistoryFail(error.data)))
  }
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
