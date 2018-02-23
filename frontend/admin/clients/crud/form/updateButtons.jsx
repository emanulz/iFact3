import React from 'react'
import {connect} from 'react-redux'
import {checkClientData} from '../../actions'
import {updateItem} from '../../../../utils/api'
import { withRouter } from 'react-router-dom'

@connect((store) => {
  return {
    client: store.clients.clientActive,
    clients: store.clients.clients
  }
})

class UpdateButtons extends React.Component {

  // BUTTONS
  updateBtn(redirect) {
    const client = this.props.client
    const clients = this.props.clients
    const fieldsOk = checkClientData(client, clients)

    if (fieldsOk) {
      const kwargs = {
        url: `/api/clients/${client.id}/`,
        item: client,
        sucessMessage: 'Cliente actualizado Correctamente.',
        errorMessage: 'Hubo un error al actualizar el Cliente, intente de nuevo.',
        dispatchType: 'CLEAR_CLIENT'
      }

      if (redirect) {
        kwargs.redirectUrl = '/admin/clients'
        kwargs.history = this.props.history
      }

      this.props.dispatch(updateItem(kwargs))
    }
  }

  deleteBtn() {

    // const client = this.props.client
    // const _this = this
    // const kwargs = {
    //   db: 'general',
    //   item: client,
    //   modelName: 'Cliente',
    //   dispatchType: 'CLEAR_CLIENT',
    //   redirectUrl: '/admin/clients',
    //   history: this.props.history
    // }
    // // ALERTIFY CONFIRM
    // alertify.confirm('Eliminar', `Desea Eliminar el Cliente ${client.code} - ${client.name}? Esta acción no se puede
    // deshacer.`, function() {
    //   _this.props.dispatch(deleteItem(kwargs))
    // }, function() {
    //   return true
    // }).set('labels', {
    //   ok: 'Si',
    //   cancel: 'No'
    // })
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
