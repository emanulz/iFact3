// ------------------------------------------------------------------------------------------
// MODULE IMPORTS
// ------------------------------------------------------------------------------------------
import alertify from 'alertifyjs'

export function checkProductData(product, products) {
  let Ok = true

  if (product.code == '') {
    alertify.alert('Error', 'Debe especificar el código del Producto')
    return false
  }

  if (product.name == '') {
    alertify.alert('Error', 'Debe especificar el nombre del Producto')
    return false
  }

  // UNIQUE FIELDS
  products.forEach((productData) => {
    if (product.code == productData.code) {
      if (product.id != productData.id) {
        alertify.alert('Error', `El Producto ${productData.code} - ${productData.description}, ya posee el código ${productData.code}`)
        Ok = false
        return false
      }
    }
  })

  return Ok
}
