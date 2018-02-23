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
  const errorType = kwargs.errorType

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

export function saveItem(kwargs) {
  const item = kwargs.item
  delete item['id']
  console.log(item)
  const url = kwargs.url
  return function(dispatch) {

    axios({
      method: 'post',
      url: url,
      data: item
    })
      .then((response) => {
        alertify.alert('Completado', kwargs.sucessMessage)
          .set('onok', function() {
            if (kwargs.redirectUrl) {
              kwargs.history.push(kwargs.redirectUrl)
            }
          })
        dispatch({type: kwargs.dispatchType, payload: ''})
      }).catch((err) => {
        console.log(err)
        if (err.response) {
          console.log(err.response.data)
        }
        alertify.alert('Error', `${kwargs.errorMessage} ERROR(ES): ${err}.`)
      })

  }
}

export function setNextPrevItem(kwargs) {

  const code = kwargs.code
  const items = kwargs.items
  const codeField = kwargs.codeField
  let previous = 0
  let next = 0

  items.sort((a, b) => {
    return a[codeField] - b[codeField]
  })

  items.forEach((item, index) => {
    if (item[codeField] == code) {
      next = index + 1
      previous = index - 1
      return true
    }
  })

  const nextCode = items[next] ? items[next][codeField] : items[0][codeField]
  const prevCode = items[previous] ? items[previous][codeField] : items.pop()[codeField]

  return function(dispatch) {
    dispatch({type: kwargs.dispatchType, payload: {next: nextCode, previous: prevCode}})
  }
}

export function setItem(kwargs) {

  const lookUpValue = kwargs.lookUpValue
  const items = kwargs.items
  const lookUpField = kwargs.lookUpField

  let foundItem = false

  items.forEach((item, index) => {
    if (item[lookUpField] == lookUpValue) {
      foundItem = item
      return true
    }
  })

  if (foundItem) {
    return function(dispatch) {
      dispatch({type: kwargs.dispatchType, payload: foundItem})
    }
  }
  return function(dispatch) {
    dispatch({type: kwargs.dispatchErrorType, payload: ''})
    alertify.alert('Error', `No hay ${kwargs.modelName} con el valor de ${kwargs.lookUpName}: ${kwargs.lookUpValue}`)
  }
}

export function updateItem(kwargs) {
  const item = kwargs.item
  const url = kwargs.url
  return function(dispatch) {

    axios({
      method: 'put',
      url: url,
      data: item
    })
      .then((response) => {
        alertify.alert('Completado', kwargs.sucessMessage)
          .set('onok', function() {
            if (kwargs.redirectUrl) {
              kwargs.history.push(kwargs.redirectUrl)
            }
          })
        dispatch({type: kwargs.dispatchType, payload: ''})
      }).catch((err) => {
        console.log(err)
        if (err.response) {
          console.log(err.response.data)
        }
        alertify.alert('Error', `${kwargs.errorMessage} ERROR(ES): ${err}.`)
      })

  }
}

export function updateItemOld(kwargs) {

  const db = new PouchDB(kwargs.db)

  return function(dispatch) {

    const item = kwargs.item
    const model = kwargs.modelName

    db.get(item._id).then((dbItem) => {
      item._rev = dbItem._rev

      db.put(item).then((response) => {
        alertify.alert('Completado', `${model} actualizado con éxito.`)
          .set('onok', function() {
            if (kwargs.redirectUrl) {
              kwargs.history.push(kwargs.redirectUrl)
            }
          })
        db.get(response.id).then((dbItem) => {
          dispatch({type: kwargs.dispatchType, payload: dbItem})
        }).catch((err) => {
          alertify.alert('Error', `hubo un error al obtener el ${model} actualizado ${err}.`)
        })
      }).catch((err) => {
        alertify.alert('Error', `hubo un error al actualizar el ${model} ${err}.`)
      })
    }).catch((err) => {
      alertify.alert('Error', `hubo un error al obtener el ${model} para actualizar ${err}.`)
    })
  }
}

export function deleteItem(kwargs) {

  const db = new PouchDB(kwargs.db)

  return function(dispatch) {
    const item = kwargs.item
    const model = kwargs.modelName

    db.get(item._id).then((dbItem) => {
      item._rev = dbItem._rev
      item._deleted = true

      db.put(item).then((response) => {

        alertify.alert('Completado', 'Elemento eliminado satifactoriamente')
          .set('onok', function() {
            if (kwargs.redirectUrl) {
              kwargs.history.push(kwargs.redirectUrl)
            }
          })
        dispatch({type: kwargs.dispatchType, payload: ''})

      }).catch((err) => {
        alertify.alert('Error', `Hubo un error al eliminar el ${model} ${err}.`)
      })
    }).catch((err) => {
      alertify.alert('Error', `Hubo un error al seleccionar el ${model} ${err}.`)
    })
  }
}

export function getNextNumericCode(elements, field) {

  if (elements.length) {

    let keys = elements.map(element => element[field])

    keys = keys.sort((a, b) => a - b)
    const max = keys.pop()
    const next = parseInt(max) + 1
    return next.toString()

  }

  return 1

}
