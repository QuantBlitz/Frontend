import axios from 'axios'

import { getPortfolio, getWatchList } from './stockActions'

const axiosConfig = {
  baseURL: 'http://localhost:8080/',
  // baseURL: 'http://quantblitz.com/',
  withCredentials: true
}

const userProfileSuccess = (payload) => {
  return { type: 'GET_USER', payload }
}

const userProfileFail = (error) => {
  return { type: 'GET_USER', error }
}

export const getUserProfile = (username) => {
  const endPoint = `/v1/user/${username}`

  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(userProfileSuccess(response.data)))
      .catch(error => dispatch(userProfileFail(error.data)))
  }
}

const registerUserSuccess = (payload) => {
  return { type: 'REGISTER_USER_SUCCESS', payload }
}

const registerUserFail = (error) => {
  return { type: 'REGISTER_USER_FAIL', error }
}

export const registerUser = (userData) => {
  const endPoint = '/v1/user/register'

  return dispatch => {
    axios.post(endPoint, userData, axiosConfig)
      .then(response => dispatch(registerUserSuccess(response.data)))
      .catch(error => dispatch(registerUserFail(error)))
  }
}

const loginUserSuccess = (payload) => {
  return { type: 'LOGIN_USER_SUCCESS', payload }
}

const loginUserFail = (error) => {
  return { type: 'LOGIN_USER_FAIL', error }
}

export const loginUser = (userData) => {
  const endPoint = '/v1/user/login'

  return dispatch => {
    axios.post(endPoint, userData, axiosConfig)
      .then(response => dispatch(loginUserSuccess(response.data)))
      .catch(error => dispatch(loginUserFail(error.data)))
  }
}

const logoutUserSuccess = (payload) => {
  return { type: 'LOGOUT_USER_SUCCESS', payload }
}

const logoutUserFail = (error) => {
  return { type: 'LOGOUT_USER_FAIL', error }
}

export const logoutUser = () => {
  const endPoint = '/v1/user/logout'

  return (dispatch, getState) => {
    const { username } = getState().user

    axios.post(endPoint, { username }, axiosConfig)
      .then(response => dispatch(logoutUserSuccess(response.data)))
      .catch(error => dispatch(logoutUserFail(error.data)))
  }
}

const userAuthSuccess = (payload) => {
  return { type: 'USER_AUTH_SUCCESS', payload }
}

const userAuthFail = (error) => {
  return { type: 'USER_AUTH_FAIL', error }
}

export const userAuth = () => {
  const endPoint = '/v1/'
  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(userAuthSuccess(response.data)))
      .catch(error => dispatch(userAuthFail(error.data)))
  }
}

const getUserDashboardSuccess = (payload) => {
  return { type: 'GET_DASHBOARD_SUCCESS', payload }
}

const getUserDashboardFail = (error) => {
  return { type: 'GET_DASHBOARD_FAIL', error }
}

export const getUserDashboard = () => {
  const endPoint = `/v1/user/dashboard`

  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(getUserDashboardSuccess(response.data)))
      .then(() => dispatch(getPortfolio()))
      .then(() => dispatch(getWatchList()))
      .catch(error => dispatch(getUserDashboardFail(error.data)))
  }
}
