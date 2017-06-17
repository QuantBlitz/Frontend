import { combineReducers } from 'redux'

import comments from './comments'
import portfolio from './portfolio'
import stock from './stock'
import symbol from './symbol'
import user from './user'

const rootReducer = combineReducers({
  comments,
  portfolio,
  stock,
  symbol,
  user
})

export default rootReducer
