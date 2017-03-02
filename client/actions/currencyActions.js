import axios from 'axios'

const axiosConfig = {
  baseURL: 'http://localhost:8080/',
  // baseURL: 'http://162.243.58.89:8080/',
  withCredentials: true
}

const getRatesSuccess = (payload) => {
  return { type: 'GET_CURRENCY_RATES', payload }
}

const getRatesFail = (error) => {
  return { type: 'GET_CURRENCY_RATES', error }
}

export const getRates = (symbol) => {
  const endPoint = `/v1/currency/${symbol}`

  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(getRatesSuccess(response.data)))
      .catch(error => dispatch(getRatesFail(error.data)))
  }
}

const currencyActionSuccess = (action, payload) => {
  const currencyAction = action.toUpperCase()
  return { type: `${currencyAction}_SYMBOL_SUCCESS`, payload }
}

const currencyActionFail = (action, error) => {
  const currencyAction = action.toUpperCase()
  return { type: `${currencyAction}_SYMBOL_FAIL`, error }
}

const currencyAction = (action, symbol) => {
  const endPoint = `/v1/currency/${action}/${symbol}`

  return dispatch => {
    axios.post(endPoint, symbol, axiosConfig)
      .then(response => dispatch(currencyActionSuccess(action, response.data)))
      .catch(error => dispatch(currencyActionFail(action, error.data)))
  }
}
