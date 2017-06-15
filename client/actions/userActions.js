import axios from 'axios'

import { getPortfolio, getWatchList } from './portfolioActions'

const baseURL = process.env.NODE_ENV === 'development' ? 
  'http://localhost:8080/' : 'http://quantblitz.com/'

const axiosConfig = {
  baseURL,
  withCredentials: true
}

const userProfileSuccess = payload => ({ type: 'GET_USER_SUCCESS', payload })
const userProfileFail = error => ({ type: 'GET_USER_FAIL', error })

export const getUserProfile = (username) => {
  const endPoint = `/v1/user/${username}`

  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(userProfileSuccess(response.data)))
      .catch(error => dispatch(userProfileFail(error.data)))
  }
}

const userExistsSuccess = payload => ({ type: 'USER_EXISTS', payload })
const userExistsFail = error => ({ type: 'USER_EXISTS', error })

export const userExists = username => {
  const endPoint = `/v1/user/exists/${username}`

  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(userExistsSuccess(response.data)))
      .catch(error => dispatch(userExistsFail(error.data)))
  }
}

const registerUserSuccess = payload => ({ type: 'REGISTER_USER_SUCCESS', payload })
const registerUserFail = error => ({ type: 'REGISTER_USER_FAIL', error })

export const registerUser = (userData) => {
  const endPoint = '/v1/user/register'

  return dispatch => {
    axios.post(endPoint, userData, axiosConfig)
      .then(response => dispatch(registerUserSuccess(response.data)))
      .catch(error => dispatch(registerUserFail(error)))
  }
}

const loginUserSuccess = payload => ({ type: 'LOGIN_USER_SUCCESS', payload })
const loginUserFail = error => ({ type: 'LOGIN_USER_FAIL', error })

export const loginUser = (userData) => {
  const endPoint = '/v1/user/login'

  return dispatch => {
    axios.post(endPoint, userData, axiosConfig)
      .then(response => dispatch(loginUserSuccess(response.data)))
      .catch(error => dispatch(loginUserFail(error.data)))
  }
}

const logoutUserSuccess = payload => ({ type: 'LOGOUT_USER_SUCCESS', payload })
const logoutUserFail = error => ({ type: 'LOGOUT_USER_FAIL', error })

export const logoutUser = () => {
  const endPoint = '/v1/user/logout'

  return (dispatch, getState) => {
    const { username } = getState().user

    axios.post(endPoint, { username }, axiosConfig)
      .then(response => dispatch(logoutUserSuccess(response.data)))
      .catch(error => dispatch(logoutUserFail(error.data)))
  }
}

const userAuthSuccess = payload => ({ type: 'USER_AUTH_SUCCESS', payload })
const userAuthFail = error => ({ type: 'USER_AUTH_FAIL', error })

export const userAuth = () => {
  const endPoint = '/v1/'
  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(userAuthSuccess(response.data)))
      .catch(error => dispatch(userAuthFail(error.data)))
  }
}

const userDashboardSuccess = payload => ({ type: 'GET_DASHBOARD_SUCCESS', payload })
const userDashboardFail = error => ({ type: 'GET_DASHBOARD_FAIL', error })

export const getUserDashboard = () => {
  const endPoint = `/v1/user/dashboard`

  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(userDashboardSuccess(response.data)))
      .then(() => dispatch(getPortfolio()))
      .then(() => dispatch(getWatchList()))
      .catch(error => dispatch(userDashboardFail(error.data)))
  }
}
