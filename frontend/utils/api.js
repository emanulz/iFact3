// ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------
import alertify from 'alertifyjs'

import axios from 'axios'

// ------------------------------------------------------------------------------------------
// CONFIG DEFAULT AXIOS
// ------------------------------------------------------------------------------------------

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

// ------------------------------------------------------------------------------------------
// EXPORT FUNCTIONS
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// GET FUNCTIONS (RETRIEVE ALL)
// ------------------------------------------------------------------------------------------
export function getItemDispatch(kwargs) {

  const url = kwargs.url
  const successType = kwargs.successType
  const errorType = kwargs.errorType

  return function(dispatch) {
    axios.get(url).then(function(response) {
      dispatch({type: successType, payload: response.data})
      dispatch({type: 'FETCHING_DONE', payload: ''})
    }).catch(function(error) {
      console.log(error.response.status)
      // IF THE ERROR IS UNAUTORIZED PAGE WILL SHOW THE MESSAGE
      if (error.response.status != 403) {
        alertify.alert('ERROR', `Error al obtener un valor del API, por favor intente de nuevo o comuníquese con el
        administrador del sistema con el siguiete error: ${error}`)
        dispatch({type: errorType, payload: error})
      }
    })
  }

}

export function getItemDoubleDispatch(kwargs) {

  const url = kwargs.url
  const successType = kwargs.successType
  const successType2 = kwargs.successType2
  const errorType = kwargs.errorType

  return function(dispatch) {
    axios.get(url).then(function(response) {
      dispatch({type: successType, payload: response.data})
      dispatch({type: successType2, payload: ''})
      dispatch({type: 'FETCHING_DONE', payload: ''})
    }).catch(function(error) {
      console.log(error.response.status)
      if (error.response.status != 403) {
        alertify.alert('ERROR', `Error al obtener un valor del API, por favor intente de nuevo o comuníquese con el
        administrador del sistema con el siguiete error: ${error}`)
        dispatch({type: errorType, payload: error})
      }
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

// ------------------------------------------------------------------------------------------
// SET FUNCTION (RETRIEVE INDIVIDUAL)
// ------------------------------------------------------------------------------------------
export function setItem(kwargs) {

  const lookUpValue = kwargs.lookUpValue
  const lookUpField = kwargs.lookUpField
  const history = kwargs.history
  const redirectUrl = kwargs.redirectUrl
  const url = kwargs.url

  return function(dispatch) {
    console.log(`${url}?${lookUpField}=${lookUpValue}`)
    axios.get(`${url}?${lookUpField}=${lookUpValue}`).then(function(response) {

      console.log(response.data)

      if (response.data.length) {
        // IF THERE IS MORE THAN ONE ELEMENT FILTERED
        if (response.data.length > 1) {
          alertify.alert('ATENCIÓN', `Existe mas de un ${kwargs.modelName} con el ${kwargs.lookUpName}:
          ${kwargs.lookUpValue}, se utilizará el primero en lista, por lo que puede no ser el mismo que ud desea
          actualizar, esto puede deberse a un error, por favor revise los
          datos o contacte con el administrador del sistema.`)
        }

        dispatch({type: kwargs.dispatchType, payload: response.data[0]})
        dispatch({type: kwargs.dispatchType2, payload: response.data[0]})
        dispatch({type: 'FETCHING_DONE', payload: ''})

      } else {
        dispatch({type: kwargs.dispatchErrorType, payload: ''})
        alertify.alert('Error', `No hay ${kwargs.modelName} con el valor de ${kwargs.lookUpName}: ${kwargs.lookUpValue}`,
          function() { history.push(redirectUrl) })
      }

    }).catch(function(error) {
      alertify.alert('ERROR', `Error al obtener el valor del API, por favor intente de nuevo o comuníquese con el
      administrador del sistema con el siguiete error: ${error}`)
    })
  }

}

// ------------------------------------------------------------------------------------------
// SAVE FUNCTION (CREATE)
// ------------------------------------------------------------------------------------------
export function saveItem(kwargs) {
  const item = kwargs.item
  delete item['id']
  const url = kwargs.url
  const logCode = kwargs.logCode
  const itemOld = kwargs.itemOld
  const logModel = kwargs.logModel
  const logDescription = kwargs.logDescription
  const user = kwargs.user
  const isSale = kwargs.isSale
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
        saveLog(logCode, logModel, itemOld, item, logDescription, user)
        dispatch({type: 'FETCHING_DONE', payload: ''})
        if (isSale) {
          dispatch({type: 'SET_SALE', payload: response.data})
          dispatch({type: 'SHOW_INVOICE_PANEL', payload: ''})
        }
      }).catch((err) => {
        console.log(err)
        if (err.response) {
          console.log(err.response.data)
        }
        alertify.alert('Error', `${kwargs.errorMessage} ERROR: ${err}.`)
      })

  }
}

// ------------------------------------------------------------------------------------------
// UPDATE FUNCTION
// ------------------------------------------------------------------------------------------

export function updateItem(kwargs) {
  const item = kwargs.item
  const url = kwargs.url
  const logCode = kwargs.logCode
  const itemOld = kwargs.itemOld
  const logModel = kwargs.logModel
  const logDescription = kwargs.logDescription
  const user = kwargs.user

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
        saveLog(logCode, logModel, itemOld, item, logDescription, user)
        dispatch({type: 'FETCHING_DONE', payload: ''})
      }).catch((err) => {
        console.log(err)
        if (err.response) {
          console.log(err.response.data)
        }
        alertify.alert('Error', `${kwargs.errorMessage} ERROR: ${err}.`)
      })

  }
}

// ------------------------------------------------------------------------------------------
// UPDATE PARTIALLY FUNCTION (PATCH)
// ------------------------------------------------------------------------------------------

export function patchItem(kwargs) {
  const item = kwargs.item
  const url = kwargs.url
  const logCode = kwargs.logCode
  const itemOld = kwargs.itemOld
  const logModel = kwargs.logModel
  const logDescription = kwargs.logDescription
  const user = kwargs.user

  return function(dispatch) {

    axios({
      method: 'patch',
      url: url,
      data: item
    })
      .then((response) => {
        if (kwargs.sucessMessage) {
          alertify.alert('Completado', kwargs.sucessMessage)
            .set('onok', function() {
              if (kwargs.redirectUrl) {
                kwargs.history.push(kwargs.redirectUrl)
              }
            })
        }
        dispatch({type: kwargs.dispatchType, payload: ''})
        saveLog(logCode, logModel, itemOld, item, logDescription, user)
        dispatch({type: 'SET_SALE_ID', payload: ''})
        dispatch({type: 'FETCHING_DONE', payload: ''})
      }).catch((err) => {
        console.log(err)
        if (err.response) {
          console.log(err.response.data)
        }
        alertify.alert('Error', `${kwargs.errorMessage} ERROR: ${err}.`)
      })

  }
}

// ------------------------------------------------------------------------------------------
// DOUBLE UPDATE PARTIALLY FUNCTION (PATCH)
// ------------------------------------------------------------------------------------------

export function patchItems(kwargs, kwargs2) {
  const item = kwargs.item
  const url = kwargs.url
  const logCode = kwargs.logCode
  const itemOld = kwargs.itemOld
  const logModel = kwargs.logModel
  const logDescription = kwargs.logDescription
  const user = kwargs.user

  const item2 = kwargs2.item
  const url2 = kwargs2.url
  const logCode2 = kwargs2.logCode
  const itemOld2 = kwargs2.itemOld
  const logModel2 = kwargs2.logModel
  const logDescription2 = kwargs2.logDescription

  return function(dispatch) {

    axios({
      method: 'patch',
      url: url,
      data: item
    })
      // FIRST PATCH THEN
      .then((response) => {

        dispatch({type: kwargs.dispatchType, payload: ''})
        saveLog(logCode, logModel, itemOld, item, logDescription, user)

        // SECOND PATCH
        axios({
          method: 'patch',
          url: url2,
          data: item2
        })
          // SECOND PATCH THEN
          .then((response) => {
            if (kwargs2.sucessMessage) {
              alertify.alert('Completado', kwargs2.sucessMessage)
                .set('onok', function() {
                  if (kwargs2.redirectUrl) {
                    kwargs2.history.push(kwargs2.redirectUrl)
                  }
                })
            }
            dispatch({type: kwargs2.dispatchType, payload: ''})
            saveLog(logCode2, logModel2, itemOld2, item2, logDescription2, user)
            dispatch({type: 'FETCHING_DONE', payload: ''})

          // SECOND PATCH CATCH
          }).catch((err) => {
            console.log(err)
            if (err.response) {
              console.log(err.response.data)
            }
            alertify.alert('Error', `${kwargs2.errorMessage} ERROR: ${err}.`)
          })

      // FIRST PATCH CATCH
      }).catch((err) => {
        console.log(err)
        if (err.response) {
          console.log(err.response.data)
        }
        alertify.alert('Error', `${kwargs.errorMessage} ERROR: ${err}.`)
      })

  }
}

// ------------------------------------------------------------------------------------------
// DELETE FUNCTION (DELETE)
// ------------------------------------------------------------------------------------------
export function deleteItem(kwargs) {

  const item = kwargs.item
  const url = kwargs.url
  const model = kwargs.modelName
  const logCode = kwargs.logCode
  const itemOld = kwargs.itemOld
  const logModel = kwargs.logModel
  const logDescription = kwargs.logDescription
  const user = kwargs.user

  return function(dispatch) {

    axios({
      method: 'delete',
      url: url
    })
      .then((response) => {

        alertify.alert('Completado', 'Elemento eliminado satifactoriamente')
          .set('onok', function() {
            if (kwargs.redirectUrl) {
              kwargs.history.push(kwargs.redirectUrl)
            }
          })
        saveLog(logCode, logModel, itemOld, item, logDescription, user)
        dispatch({type: 'FETCHING_DONE', payload: ''})

      }).catch((err) => {
        alertify.alert('Error', `Hubo un error al eliminar el ${model} ERROR: ${err}.`)
      })
  }
}

// ------------------------------------------------------------------------------------------
// LOAD CONFIG FUNCTION
// ------------------------------------------------------------------------------------------
export function loadGlobalConfig(section, name, success, fail) {
  return function(dispatch) {
    if (name) {

      axios.get(`/api/globalconf/${section}__${name}`).then(function(response) {
        // TODO Single config fetch
      }).catch(function(error) {
        dispatch({type: fail, payload: error})
      })

    } else {
      axios.get(`/api/globalprefs`).then(function(response) {
        // The property to modify in reducer
        const config = response.data
          ? response.data.filter(item => {
            return item.section == section
          })
          : {}
        const data = {}
        config.forEach(item => {
          data[item.name] = item.value
        })

        dispatch({type: success, payload: {data: data, section: section}})
      }).catch(function(error) {
        dispatch({type: fail, payload: error})
      })
    }
  }
}

// ------------------------------------------------------------------------------------------
// SAVE LOG FUNCTION (CREATE LOG)
// ------------------------------------------------------------------------------------------
export function saveLog (code, model, oldObject, object, description, user) {

  const prevObject = JSON.stringify(oldObject)
  const newObject = JSON.stringify(object)
  const user2 = JSON.stringify(user)

  const item = {
    code: code,
    model: model,
    prev_object: prevObject,
    new_object: newObject,
    description: description,
    user: user2
  }

  axios({
    method: 'post',
    url: '/api/logs/',
    data: item
  })
    .then((response) => {

    }).catch((err) => {
      console.log(err)
      if (err.response) {
        console.log(err.response.data)
      }
      alertify.alert('Error', `Error al crear el Log del movimiento, ERROR: ${err}.`)
    })
}

// ------------------------------------------------------------------------------------------
// AUX FUNCTIONS
// ------------------------------------------------------------------------------------------

// NEXT NUMERIC CODE
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

// NEXT PREVIOUS ITEMS
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
