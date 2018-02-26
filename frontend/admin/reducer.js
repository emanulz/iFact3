import { combineReducers } from 'redux'

import clients from './clients/reducer.js'
import suppliers from './suppliers/reducer.js'
import lockScreen from './lockScreen/reducer.js'
import user from './user/reducer.js'
import fetching from '../general/fetching/reducer.js'

export default combineReducers({
  clients,
  suppliers,
  lockScreen,
  user,
  fetching
})
