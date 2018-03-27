// ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------
import alertify from 'alertifyjs'

export function checkData(user, users) {
  let Ok = true

  if (user.password != user.password2) {
    alertify.alert('Error', 'Las contraseñas no coinciden')
    // alertify.notify('Debe especificar el código del Cliente', 'error', 5, function() { console.log('dismissed') })
    return false
  }

  // UNIQUE FIELDS
  users.forEach((userData) => {

    if (user.username == userData.username && userData.username != '') {
      if (user.id != userData.id) {
        alertify.alert('Error', `El usuario ${userData.username} - ${userData.first_name} ${userData.last_name}
                        ya posee el usuario ${userData.username}`)
        Ok = false
        return false
      }
    }
  })

  return Ok
}
