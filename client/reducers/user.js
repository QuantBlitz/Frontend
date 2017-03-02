import { browserHistory } from 'react-router'

const initialState = {
  fetchingData: true,
  loggedIn: false,
  username: '',
  userDetails: {},
  portfolioData: {},
  watchlistData: {},
  settings: {},
  error: ''
}

const user = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GET_USER':
      return { profileData: action.payload }
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        fetchingData: false,
        loggedIn: true,
        username: action.payload.username
      }
    case 'REGISTER_USER_FAIL':
      window.location.assign('/')
      return { ...state, fetchingData: false, error: action.error }
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        fetchingData: false,
        loggedIn: true,
        username: action.payload.username
      }
    case 'LOGIN_USER_FAIL':
      window.location.assign('/')
      return { ...state, fetchingData: false, error: action.error }
    case 'LOGOUT_USER_SUCCESS':
      window.location.assign('/')
      return {
        ...state,
        fetchingData: false,
        loggedIn: false,
        username: ''
      }
    case 'LOGOUT_USER_FAIL':
      return { ...state, fetchingData: false, error: action.error }
    case 'USER_AUTH_SUCCESS':
      return { ...state, fetchingData: false, loggedIn: true }
    case 'USER_AUTH_FAIL':
      return { ...state, fetchingData: false, loggedIn: false }
    case 'GET_USER_DASHBOARD_SUCCESS':
      return {
        ...state,
        fetchingData: false,
        userData: action.payload.user,
        portfolioData: action.payload.portfolio,
        watchlistData: action.payload.watchlist
      }
    case 'GET_USER_DASHBOARD_FAIL':
      return { ...state, fetchingData: false, loggedIn: false }
    default:
      return state
  }
}

export default user
