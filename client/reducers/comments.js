const initialState = {
  one: {
    content: 'one',
    comments: {
      four: {
        content: 'here is four',
        comments: {}
      }
    }
  },
  two: {
    content: 'twoooo',
    comments: {
      five: {
        content: 'yay five',
        comments: {}
      },
      six: {
        content: 'mega six',
        comments: {}
      }
    }
  },
  three: {
    content: 'three stuff',
    comments: {
      seven: {
        content: 'seven things',
        comments: {}
      }
    }
  }
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_COMMENT_SUCCESS':
      return state
    case 'POST_COMMENT_FAIL':
      return state
    default:
      return state
  }
}

export default comments
