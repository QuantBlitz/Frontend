import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ?
  'http://localhost:8080/' : 'http://quantblitz.com/'

const config = {
  baseURL,
  withCredentials: true
}

const symbolChartSuccess = payload => ({ type: 'GET_SYMBOL_CHART_SUCCESS', payload })
const symbolChartFail = error => ({ type: 'GET_SYMBOL_CHART_FAIL', error })

export const getSymbolChart = (symbol) => {
  const endPoint = `/v1/stock/history/${symbol}`
  return dispatch => {
    axios.get(endPoint, config)
      .then(response => dispatch(symbolChartSuccess(response.data)))
      .catch(error => dispatch(symbolChartFail(error.data)))
  }
}
