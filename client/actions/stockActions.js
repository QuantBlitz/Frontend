import axios from 'axios'

import { getUserDashboard } from './userActions'

const axiosConfig = {
  baseURL: 'http://localhost:8080/',
  // baseURL: 'http://quantblitz.com/',
  withCredentials: true
}

export const isFetching = bool => ({ type: 'FETCHING_STOCK_DATA', payload: bool })

const symbolInputSuccess = payload => ({ type: 'SYMBOL_INPUT_SUCCESS', payload })
const symbolInputFail = error => ({ type: 'SYMBOL_INPUT_FAIL', error })

export const getSymbolInput = (input) => {
  const endPoint = `/v1/stock/input/${input}`

  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(symbolInputSuccess(response.data)))
      .catch(error => dispatch(symbolInputFail(error.data)))
  }
}

export const clearSymbolInput = () => ({ type: 'CLEAR_SYMBOL_INPUT' })

export const getLatestTrades = payload => ({ type: 'GET_LATEST_TRADES', payload })

const stockQuoteSuccess = payload => ({ type: 'GET_STOCK_QUOTE_SUCCESS', payload })
const stockQuoteFail = error => ({ type: 'GET_STOCK_QUOTE_FAIL', error })

export const getStockQuote = (symbol) => {
  const endPoint = `/v1/stock/quote/${symbol}`

  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(stockQuoteSuccess(response.data)))
      .catch(error => dispatch(stockQuoteFail(error.data)))
  }
}

const stockHistorySuccess = payload => ({ type: 'GET_STOCK_HISTORY_SUCCESS', payload })
const stockHistoryFail = error => ({ type: 'GET_STOCK_HISTORY_FAIL', error })

export const getStockHistory = (symbol, start, end) => {
  const endPoint = `/v1/stock/history/${symbol}?start=${start}&end=${end}`
  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(stockChartSuccess(response.data)))
      .catch(error => dispatch(stockChartFail(error.data)))
  }
}
