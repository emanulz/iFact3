/*
 * Module dependencies
 */
import React from 'react'
import routes from './routes.js'
import { checkUserPermissions } from '../../utils/checkPermissions'
import {connect} from 'react-redux'

@connect((store) => {
  return {
    permissions: store.clients.permissions
  }
})
export default class List extends React.Component {

  componentWillMount() {

    console.log('MOUNT')

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
  }

  // Main Layout
  render() {

    return <div className='Main'>
      {routes}
    </div>

  }

}
