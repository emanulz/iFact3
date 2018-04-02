/*
 * Module dependencies
 */
import React from 'react'
import {connect} from 'react-redux'

@connect((store) => {
  return {
    user: store.users.userActive,
    profile: store.users.userProfileActive
  }
})
export default class UserInfo extends React.Component {

  // Main Layout
  render() {
    const user = this.props.user
    const profile = this.props.profile

    const name = user ? `${user.first_name} ${user.last_name}` : ''
    const username = user ? user.username : ''

    const img = profile && profile.avatar ? profile.avatar : '/media/default/profile.jpg'

    return <div className='permissions-container-userinfo'>
      <div className='permissions-container-userinfo-image'>
        <img src={img} />
      </div>
      <div className='permissions-container-userinfo-data'>
        <div>Nombre: {name}</div>
        <div>Usuario: {username}</div>
      </div>
    </div>

  }

}
