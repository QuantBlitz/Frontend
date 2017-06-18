import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ?
  'http://localhost:8080/' : 'http://quantblitz.com/'

const config = {
  baseURL,
  withCredentials: true
}

const addReplySuccess = payload => ({ type: 'ADD_REPLY_SUCCESS', payload })
const addReplyFail = error => ({ type: 'ADD_REPLY_FAIL', error })

export const addReply = (data) => {
  const endPoint = '/v1/comment/' + data.symbol
  return dispatch => {
    axios.post(endPoint, data, config)
      .then(response => dispatch(addReplySuccess(response.data)))
      .catch(error => dispatch(addReplyFail(error.data)))
  }
}
