import { combineReducers } from 'redux'

import clients from './clients/reducer.js'
import lockScreen from './lockScreen/reducer.js'
import sideMenu from './layout/sideMenu/reducer.js'

export default combineReducers({
  clients,
  lockScreen,
  sideMenu
})
