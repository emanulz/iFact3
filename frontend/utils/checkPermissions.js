// ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------
import alertify from 'alertifyjs'

import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

// ------------------------------------------------------------------------------------------
// EXPORT FUNCTIONS
// ------------------------------------------------------------------------------------------

export function checkUserPermissions(kwargs) {
  return function(dispatch) {
    const data = JSON.stringify({permissions: kwargs.permissions})
    // calls the function in backend to check permissions
    axios.post('/api/checkpermissions/', data)
      .then(function(response) {
        dispatch({type: 'FETCHING_DONE', payload: ''})
        dispatch({type: kwargs.success, payload: response.data})
      })
      .catch(function(error) {
        alertify.alert('ERROR', `Error al intentar verificar los permisos de usuario, por favor intente de nuevo o comuníquese con el
        administrador del sistema con el siguiete error: ${error}`)
        dispatch({type: kwargs.fail, payload: ''})
      })
  }
}
