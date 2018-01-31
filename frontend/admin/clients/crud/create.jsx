/*
 * Module dependencies
 */
import React from 'react'
import Form from './components/form.jsx'
import Unauthorized from '../../general/unauthorized.jsx'
import {connect} from 'react-redux'

@connect((store) => {
  return {
    permissions: store.clients.permissions
  }
})
export default class Update extends React.Component {

  // Main Layout
  render() {

    let content = ''

    switch (this.props.permissions.create) {
      case true:
      {
        content = <Form />
        break
      } // case

      case false:
      {
        content = <Unauthorized />
        break
      } // case
      default:
      {
        content = <div>FETCHING</div>
        break
      } // case
    }

    return <div className='Update'>
      {content}
    </div>

  }

}
