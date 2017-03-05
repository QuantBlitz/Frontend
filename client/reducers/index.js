import { combineReducers } from 'redux'

import stock from './stock'
import user from './user'

const rootReducer = combineReducers({
  stock,
  user
})

export default rootReducer
