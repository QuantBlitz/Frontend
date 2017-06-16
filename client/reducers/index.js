import { combineReducers } from 'redux'

import portfolio from './portfolio'
import stock from './stock'
import symbol from './symbol'
import user from './user'

const rootReducer = combineReducers({
  portfolio,
  stock,
  symbol,
  user
})

export default rootReducer
