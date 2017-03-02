import { combineReducers } from 'redux'

import currency from './currency'
import stock from './stock'
import user from './user'

const rootReducer = combineReducers({
  currency,
  stock,
  user
})

export default rootReducer
