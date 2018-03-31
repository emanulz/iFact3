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
export default class UserInfo extends React.Component {

  // Main Layout
  render() {

    return <div className='permissions-container-userinfo'>
      <div className='permissions-container-userinfo-image'>
        <img src='/media/default/profile.jpg' />
      </div>
      <div className='permissions-container-userinfo-data'>
        <p>Nombre: Emanuel Zuniga Infante</p>
        <p>Usuario: emanuelziga</p>
      </div>
    </div>

  }

}
