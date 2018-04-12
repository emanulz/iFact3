import { combineReducers } from 'redux'

import fetching from '../general/fetching/reducer.js'
import layout from './layout/reducer.js'
import user from './user/reducer.js'
import cart from './general/cart/reducer.js'
import clients from './general/clients/reducer.js'
import products from './general/product/reducer.js'
import sale from './sale/reducer.js'
import messages from './messages/reducer.js'

export default combineReducers({
  fetching,
  layout,
  user,
  cart,
  clients,
  products,
  sale,
  messages
})
