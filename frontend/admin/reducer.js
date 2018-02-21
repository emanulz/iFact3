import { combineReducers } from 'redux'

import clients from './clients/reducer.js'
import lockScreen from './lockScreen/reducer.js'
import user from './user/reducer.js'

export default combineReducers({
  clients,
  lockScreen,
  user
})
