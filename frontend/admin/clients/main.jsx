/*
 * Module dependencies
 */
import React from 'react'
import routes from './routes.js'
import { checkUserPermissions } from '../../utils/checkPermissions'
import { getItemDispatch } from '../../utils/api.js'
import {connect} from 'react-redux'

@connect((store) => {
  return {
    permissions: store.clients.permissions
  }
})
export default class List extends React.Component {

  componentWillMount() {

    const permissions = {
      create: 'clients.add_client',
      update: 'clients.change_client',
      list: 'clients.can_list',
      delete: 'clients.delete_client'
    }
    const kwargs = {
      permissions: permissions,
      success: 'FETCH_USER_CLIENT_PERMISSIONS_FULLFILLED',
      fail: 'FETCH_USER_CLIENT_PERMISSIONS_REJECTED'
    }
    this.props.dispatch(checkUserPermissions(kwargs))

    const clientKwargs = {
      url: '/api/clients',
      successType: 'FETCH_CLIENTS_FULFILLED',
      errorType: 'FETCH_CLIENTS_REJECTED'
    }

    this.props.dispatch(getItemDispatch(clientKwargs))

  }

  // Main Layout
  render() {

    return <div className='Main heigh100'>
      {routes}
    </div>

  }

}
