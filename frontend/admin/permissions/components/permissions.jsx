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
export default class Permissions extends React.Component {

  // Main Layout
  render() {

    return <div className='permissions-container-permissions'>
      <div />
    </div>

  }

}
