/*
 * Module dependencies
 */
import React from 'react'
import {connect} from 'react-redux'

@connect((store) => {
  return {
    users: store.users.users,
    filter: store.permissions.userFilter
  }
})
export default class SideBar extends React.Component {

  setInputFilter(event) {

    const target = event.target
    const value = target.value

    this.props.dispatch({type: 'SET_USER_FILTER', payload: value})
  }

  // Main Layout
  render() {

    const filter = this.props.filter

    const filteredUsers = this.props.users.filter(user => {
      return user.first_name.indexOf(filter) > -1 || user.last_name.indexOf(filter) > -1 ||
      user.username.indexOf(filter) > -1
    })

    const users = filteredUsers.map(user => {
      const info = user.first_name && user.last_name ? `${user.first_name} ${user.last_name}` : user.username
      return <li key={user.id}>{info}</li>
    })

    return <div className='permissions-container-sidebar'>
      <input type='text' className='form-control input' placeholder='Filtrar...'
        onChange={this.setInputFilter.bind(this)} />
      <ul>
        {users}
      </ul>

    </div>

  }

}
