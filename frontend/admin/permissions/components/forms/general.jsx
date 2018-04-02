/*
 * Module dependencies
 */
import React from 'react'
import {connect} from 'react-redux'

@connect((store) => {
  return {
    permissions: store.users.permissions
  }
})
export default class General extends React.Component {

  // Main Layout
  render() {

    return <div className='permissions-container-permissions-tab'>

      <div className='permissions-container-permissions-tab-item'>
        <div className='permissionName'>Acceder al Administrador</div>
        <div className='permissionInput'>
          <input type='checkbox' />
        </div>
      </div>

    </div>

  }

}
