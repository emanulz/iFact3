import React from 'react'
import {connect} from 'react-redux'
import {checkData} from '../../actions'
import {updateItem, getItemDoubleDispatch, deleteItem} from '../../../../utils/api'
import { withRouter } from 'react-router-dom'
import alertify from 'alertifyjs'

@connect((store) => {
  return {
    user: store.users.userActive,
    users: store.users.users,
    userOld: store.users.userActiveOld,
    userCreating: store.user.userCreating
  }
})

class UpdateButtons extends React.Component {

  // BUTTONS
  updateBtn(redirect) {
    const userCreating = this.props.userCreating
    const user = this.props.user
    const userOld = this.props.userOld
    const users = this.props.users
    const fieldsOk = checkData(user, users)

    if (fieldsOk) {
      const kwargs = {
        url: `/api/users/${user.id}/`,
        baseUrl: `/api/users/`,
        item: user,
        logCode: 'USER_UPDATE',
        logDescription: 'Actualización de Usuario',
        logModel: 'USER',
        user: userCreating,
        itemOld: userOld,
        sucessMessage: 'Usuario actualizado Correctamente.',
        errorMessage: 'Hubo un error al actualizar el Usuario, intente de nuevo.',
        dispatchType: 'CLEAR_USER'
      }

      if (redirect) {
        kwargs.redirectUrl = '/admin/users'
        kwargs.history = this.props.history
      }

      const _this = this

      const updatePromise = new Promise((resolve, reject) => {
        _this.props.dispatch({type: 'FETCHING_STARTED', payload: ''})
        _this.props.dispatch(updateItem(kwargs))
        resolve()
      })

      updatePromise.then(() => {
        const userKwargs = {
          url: '/api/users',
          successType: 'FETCH_USERS_FULFILLED',
          successType2: 'CLEAR_USER',
          errorType: 'FETCH_USERS_REJECTED'
        }
        _this.props.dispatch({type: 'FETCHING_STARTED', payload: ''})
        _this.props.dispatch(getItemDoubleDispatch(userKwargs))
      }).catch((err) => {
        console.log(err)
      })

    }
  }

  deleteBtn() {

    const user = this.props.user
    const userCreating = this.props.userCreating
    const userOld = {noPrevious: 'No previous Item needed'}

    const _this = this
    const kwargs = {
      url: `/api/users/${user.id}/`,
      item: user,
      logCode: 'USER_DELETE',
      logDescription: 'Eliminación de Usuario',
      logModel: 'USER',
      user: userCreating,
      itemOld: userOld,
      modelName: 'Usuario',
      dispatchType: 'CLEAR_USER',
      redirectUrl: '/admin/users',
      history: this.props.history
    }
    // ALERTIFY CONFIRM
    alertify.confirm('Eliminar', `Desea Eliminar el Usuario ${user.username} - ${user.first_name} ${user.last_name}? Esta acción no se puede
    deshacer.`, function() {
      _this.props.dispatch({type: 'FETCHING_STARTED', payload: ''})
      _this.props.dispatch(deleteItem(kwargs))
    }, function() {
      return true
    }).set('labels', {
      ok: 'Si',
      cancel: 'No'
    })
  }

  render() {
    // ********************************************************************
    // BUTTONS
    // ********************************************************************
    const buttons = <div className='col-xs-12 row form-buttons-container-row'>
      <div className='col-xs-12 col-sm-4'>
        <button onClick={this.updateBtn.bind(this, true)}
          className='form-buttons-container-save form-control btn-success'>
          Actualizar
        </button>
      </div>

      <div className='col-xs-12 col-sm-4'>
        <button onClick={this.updateBtn.bind(this, false)}
          className='form-buttons-container-saveContinue form-control btn-primary'>
          Actualizar y Seguir
        </button>
      </div>

      <div className='col-xs-12 col-sm-4'>
        <button onClick={this.deleteBtn.bind(this)} className='form-buttons-container-cancel form-control btn-danger'>
          Eliminar
        </button>
      </div>
    </div>

    // ********************************************************************
    // RETURN BLOCK
    // ********************************************************************
    return <div className='form-buttons-container'>
      {buttons}
    </div>

  }
}

// EXPORT THE CLASS WITH ROUTER
export default withRouter(UpdateButtons)
