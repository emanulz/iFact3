import { combineReducers } from 'redux'

import sideMenu from './layout/sideMenu/reducer.js'
import lockScreen from './lockScreen/reducer.js'

export default combineReducers({
  sideMenu,
  lockScreen
})
