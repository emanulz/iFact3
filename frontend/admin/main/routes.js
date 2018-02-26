import React from 'react'
import {Route} from 'react-router-dom'

// Routes Components

import Home from '../home/home.jsx'
import Clients from '../clients/main.jsx'
import Suppliers from '../suppliers/main.jsx'

const routes = <div className='heigh100'>

  <Route exact path='/admin' component={Home} />
  <Route path='/admin/clients' component={Clients} />
  <Route path='/admin/suppliers' component={Suppliers} />

</div>

export default routes
