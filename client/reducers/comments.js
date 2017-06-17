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
    content: 'number two',
    comments: {
      five: {
        content: 'five',
        comments: {
          eight: {
            content: 'this is eight',
            comments: {}
          },
          nine: {
            content: 'no this is patrick',
            comments: {
              ten: {
                content: 'no THIS is patrick',
                comments: {}
              }
            }
          }
        }
      },
      six: {
        content: 'mega six',
        comments: {}
      }
    }
  },
  three: {
    content: 'three three three',
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
