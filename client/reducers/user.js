import { browserHistory } from 'react-router'

const initialState = {
  fetchingData: true,
  loggedIn: false,
  user: {},
  portfolioData: {},
  watchlistData: {}
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return { profileData: action.payload }
    case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        fetchingData: false,
        loggedIn: true,
        user: action.payload.user
      }
    case 'REGISTER_USER_FAIL':
      window.location.assign('/')
      return { ...state, fetchingData: false }
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        fetchingData: false,
        loggedIn: true,
        user: action.payload.user
      }
    case 'LOGIN_USER_FAIL':
      window.location.assign('/')
      return { ...state, fetchingData: false }
    case 'LOGOUT_USER_SUCCESS':
      window.location.assign('/')
      return {
        ...state,
        fetchingData: false,
        loggedIn: false,
        user: {}
      }
    case 'LOGOUT_USER_FAIL':
      return { ...state, fetchingData: false }
    case 'USER_AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        fetchingData: false,
        loggedIn: true
      }
    case 'USER_AUTH_FAIL':
      return { ...state, fetchingData: false, loggedIn: false }
    case 'GET_DASHBOARD_SUCCESS':
      return {
        ...state,
        fetchingData: false,
        portfolioData: action.payload.portfolio,
        watchlistData: action.payload.watchlist
      }
    case 'GET_DASHBOARD_FAIL':
      return { ...state, fetchingData: false, loggedIn: false }
    default:
      return state
  }
}

export default user
