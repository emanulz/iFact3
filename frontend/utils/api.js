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

export function getItemDispatch(kwargs) {

  const url = kwargs.url
  const successType = kwargs.successType
  const errorType = kwargs.erroType

  return function(dispatch) {
    axios.get(url).then(function(response) {
      dispatch({type: successType, payload: response.data})
    }).catch(function(error) {
      alertify.alert('ERROR', `Error al obtener un valor del API, por favor intente de nuevo o comuníquese con el
      administrador del sistema con el siguiete error: ${error}`)
      dispatch({type: errorType, payload: error})
    })
  }

}

export function getItemReturn(kwargs) {

  const url = kwargs.url

  axios.get(url).then(function(response) {
    return response.data
  }).catch(function(error) {
    alertify.alert('ERROR', `Error al obtener un valor del API, por favor intente de nuevo o comuníquese con el
    administrador del sistema con el siguiete error: ${error}`)
    return error
  })

}
