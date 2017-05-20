import { combineReducers } from 'redux'

import portfolio from './portfolio'
import stock from './stock'
import user from './user'

const rootReducer = combineReducers({
  portfolio,
  stock,
  user
})

export default rootReducer
