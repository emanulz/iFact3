/*
 * Module dependencies
 */
import React from 'react'
import Form from './form/updateForm.jsx'

import Unauthorized from '../../../general/unauthorized.jsx'
import {connect} from 'react-redux'
import {setNextPrevItem} from '../../../utils/api'
import {Link} from 'react-router-dom'
import UpdateButtons from './form/updateButtons.jsx'
import ItemsBar from '../../layout/itemsBar/itemsBar.jsx'
import {toggleItemsBar} from '../../layout/itemsBar/actions'

@connect((store) => {
  return {
    permissions: store.users.permissions,
    user: store.users.userActive,
    nextUser: store.users.nextUser,
    previousUser: store.users.previousUser,
    users: store.users.users
  }
})
export default class Update extends React.Component {

  componentDidMount() {
    this.props.dispatch({type: 'CLEAR_NEXT_PREV_USER', payload: ''})
  }

  componentWillUpdate(nextProps) {

    const code = this.props.location.pathname.split('/').pop()

    if (nextProps.nextUser == 0 && nextProps.previousUser == 0 && nextProps.users.length) {

      const kwargs = {
        items: [
          ...nextProps.users
        ],
        codeField: 'code',
        code: code,
        dispatchType: 'SET_NEXT_PREV_USER'
      }

      this.props.dispatch(setNextPrevItem(kwargs))

    }
  }

  toggleBar() {
    toggleItemsBar()
  }

  // Main Layout
  render() {

    let content = ''

    const code = this.props.location.pathname.split('/').pop()

    switch (this.props.permissions.create) {
      case true:
      {
        content = <div className='heigh100'>
          <Form key={code} update location={this.props.location} />
          <UpdateButtons />
        </div>
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

    return <div className='create heigh100'>
      <div className='create-edit-header'>
        <h1>EDITAR USUARIO {code}</h1>
        <Link to={`/admin/users/edit/${this.props.previousUser}`}>
          <span className={`previous fa fa-chevron-circle-left`} />
        </Link>
        <Link to={`/admin/users/edit/${this.props.nextUser}`}>
          <span className='next fa fa-chevron-circle-right' />
        </Link>
        <span onClick={this.toggleBar.bind(this)} className='list fa fa-list' />
      </div>

      {content}

      <ItemsBar items={this.props.users} tittle='Lista de Usuarios' codeField='username' descriptionField='first_name'
        descriptionField2='last_name' editPath='/admin/users/edit/' />
    </div>

  }

}
