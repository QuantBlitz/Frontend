import axios from 'axios'

import { getUserDashboard } from './userActions'

const baseURL = process.env.NODE_ENV === 'development' ?
  'http://localhost:8080/' : 'http://quantblitz.com/'

const axiosConfig = {
  baseURL,
  withCredentials: true
}

export const isFetching = bool => ({ type: 'FETCHING_STOCK_DATA', payload: bool })

export const clearSymbolInput = () => ({ type: 'CLEAR_SYMBOL_INPUT' })

export const clearQuoteData = () => ({ type: 'CLEAR_QUOTE_DATA' })

export const getLatestTrades = payload => ({ type: 'GET_LATEST_TRADES', payload })

const symbolInputSuccess = payload => ({ type: 'SYMBOL_INPUT_SUCCESS', payload })
const symbolInputFail = error => ({ type: 'SYMBOL_INPUT_FAIL', error })

export const getSymbolInput = (input) => {
  const endPoint = `/v1/stock/input/${input}`

  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(symbolInputSuccess(response.data)))
      .then(() => clearSymbolInput())
      .catch(error => dispatch(symbolInputFail(error.data)))
  }
}

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
