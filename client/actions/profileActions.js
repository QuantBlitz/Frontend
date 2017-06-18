import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ?
  'http://localhost:8080/' : 'http://quantblitz.com/'

const config = {
  baseURL,
  withCredentials: true
}

const getProfileSuccess = payload => ({ type: 'GET_PROFILE_SUCCESS', payload })
const getProfileFail = error => ({ type: 'GET_PROFILE_FAIL', error })

export const getProfile = (username) => {
  const endPoint = `/u/${username}`
  return dispatch => {
    axios.get(endPoint, config)
      .then(response => dispatch(getProfileSuccess(response.data)))
      .catch(error => dispatch(getProfileFail(error.data)))
  }
}
