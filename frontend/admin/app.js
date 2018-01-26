import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import alertify from 'alertifyjs'

// REDUX PROVIDER
import {Provider} from 'react-redux'
// COMPONENTS

import TopBar from './layout/topBar/topBar.jsx'
import SideMenu from './layout/sideMenu/sideMenu.jsx'
import Configbar from './layout/configBar/configBar.jsx'
import {hideConfigBar} from './layout/configBar/actions'
import Main from './main/main.jsx'

// STORE
import store from './store.js'

import routes from './routes.js'

window.alertify = alertify

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <div>
//         <SideMenu />
//         <div id='mainContainer' className='blur-div mainContainer'>
//           <TopBar />
//           <Configbar />
//           {/* <div onClick={hideConfigBar} className='mainContainer-content'>
//
//           </div> */}
//         </div>
//       </div>
//     </Router>
//   </Provider>, document.getElementById('app-container'))

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app-container'))
