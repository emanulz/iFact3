import React from 'react'
import {Route} from 'react-router-dom'

// Routes Components

import Home from '../home/home.jsx'

const routes = <div>

  <Route exact path='/admin' component={Home} />

</div>

export default routes
