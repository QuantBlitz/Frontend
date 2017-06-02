import axios from 'axios'

const axiosConfig = {
  // baseURL: 'http://localhost:8080/',
  baseURL: 'http://quantblitz.com/',
  withCredentials: true
}

const getProfileSuccess = payload => ({ type: 'GET_PROFILE_SUCCESS', payload })
const getProfileFail = error => ({ type: 'GET_PROFILE_FAIL', error })

export const getProfile = (username) => {
  const endPoint = `/u/${username}`
  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(getProfileSuccess(response.data)))
      .catch(error => dispatch(getProfileFail(error.data)))
  }
}
