import { combineReducers } from 'redux'

import fetching from '../general/fetching/reducer.js'
import layout from './layout/reducer.js'
import user from './user/reducer.js'

export default combineReducers({
  fetching,
  layout,
  user
})
