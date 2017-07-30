import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ?
  'http://localhost:8080/' : 'http://quantblitz.com/'

const config = {
  baseURL,
  withCredentials: true
}

const postCommentSuccess = payload => ({ type: 'POST_COMMENT_SUCCESS', payload })
const postCommentFail = error => ({ type: 'POST_COMMENT_FAIL', error })

export const postComment = (data) => {
  const endPoint = '/v1/comment/create'
  return dispatch => {
    axios.post(endPoint, data, config)
      .then(response => dispatch(postCommentSuccess(response.data)))
      .catch(error => dispatch(postCommentFail(error.data)))
  }
}

const postReplySuccess = payload => ({ type: 'POST_REPLY_SUCCESS', payload })
const postReplyFail = error => ({ type: 'POST_REPLY_FAIL', error })

export const postReply = (data) => {
  const endPoint = '/v1/comment/reply'
  return dispatch => {
    axios.post(endPoint, data, config)
      .then(response => dispatch(postReplySuccess(response.data)))
      .catch(error => dispatch(postReplyFail(error.data)))
  }
}
