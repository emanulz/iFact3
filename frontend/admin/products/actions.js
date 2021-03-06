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

export function determinAmounts(product, fieldName, value) {
  switch (fieldName) {

    case 'sell_price':
    {
      product = fromSellPrice(product, value, 'price', 'utility')
      return product
    }
    case 'sell_price2':
    {
      product = fromSellPrice(product, value, 'price2', 'utility2')
      return product
    }
    case 'sell_price3':
    {
      product = fromSellPrice(product, value, 'price3', 'utility3')
      return product
    }

    case 'price':
    {
      product = fromPrice(product, value, 'sell_price', 'utility')
      return product
    }
    case 'price2':
    {
      product = fromPrice(product, value, 'sell_price2', 'utility2')
      return product
    }
    case 'price3':
    {
      product = fromPrice(product, value, 'sell_price3', 'utility3')
      return product
    }

    case 'cost':
    {
      product = fromCost(product, value)
      return product
    }
    case 'cost_based':
    {
      product = fromCost(product, product.cost)
      return product
    }
    case 'taxes':
    {
      product = taxesChanged(product)
      return product
    }
    case 'taxes2':
    {
      product = taxesChanged(product)
      return product
    }

    case 'use_taxes':
    {
      product = taxesChanged(product)
      return product
    }
    case 'use_taxes2':
    {
      product = taxesChanged(product)
      return product
    }
    case 'utility':
    {
      product = fromUtility(product, value, 'price', 'sell_price')
      return product
    }
    case 'utility2':
    {
      product = fromUtility(product, value, 'price2', 'sell_price2')
      return product
    }
    case 'utility3':
    {
      product = fromUtility(product, value, 'price3', 'sell_price3')
      return product
    }

  }

  return product
}

function fromSellPrice(product, value, priceField, utilityField) {

  product.cost_based = false

  if (value) {
    const iv1 = (product.use_taxes && product.taxes) ? parseFloat(product.taxes) / 100 : 0
    const iv2 = (product.use_taxes2 && product.taxes2) ? parseFloat(product.taxes2) / 100 : 0

    const price = parseFloat(value / (1 + iv1 + iv2))

    product[priceField] = price.toFixed(2)

    const utility = product.cost ? ((price / parseFloat(product.cost)) - 1) * 100 : 0

    product[utilityField] = utility.toFixed(2)
    return product

  } else {
    product[priceField] = 0
    product[utilityField] = 0
    return product
  }
}

function fromPrice(product, value, sellField, utilityField) {

  value = parseFloat(value)
  product.cost_based = false

  if (value) {
    const iv1 = (product.use_taxes && product.taxes) ? parseFloat(product.taxes) / 100 : 0
    const iv2 = (product.use_taxes2 && product.taxes2) ? parseFloat(product.taxes2) / 100 : 0

    const sellPrice = (value * iv1) + (value * iv2) + value
    product[sellField] = sellPrice.toFixed(2)

    const utility = product.cost ? ((value / parseFloat(product.cost)) - 1) * 100 : 0
    product[utilityField] = utility.toFixed(2)
    return product

  } else {
    product[sellField] = 0
    product[utilityField] = 0
    return product
  }
}

function fromCost(product, cost) {

  if (product.cost_based) { // IF PRICE DEPENDS ON COST
    const iv1 = (product.use_taxes && product.taxes) ? parseFloat(product.taxes) / 100 : 0
    const iv2 = (product.use_taxes2 && product.taxes2) ? parseFloat(product.taxes2) / 100 : 0

    const price = cost && product.utility ? parseFloat(cost) * (1 + (parseFloat(product.utility) / 100)) : 0
    product['price'] = price.toFixed(2)

    const price2 = cost && product.utility2 ? parseFloat(cost) * (1 + (parseFloat(product.utility2) / 100)) : 0
    product['price2'] = price2.toFixed(2)

    const price3 = cost && product.utility3 ? parseFloat(cost) * (1 + (parseFloat(product.utility3) / 100)) : 0
    product['price3'] = price3.toFixed(2)

    const sellPrice = (price * iv1) + (price * iv2) + price
    product['sell_price'] = sellPrice.toFixed(2)

    const sellPrice2 = (price2 * iv1) + (price2 * iv2) + price2
    product['sell_price2'] = sellPrice2.toFixed(2)

    const sellPrice3 = (price3 * iv1) + (price3 * iv2) + price3
    product['sell_price3'] = sellPrice3 ? sellPrice3.toFixed(2) : 0

    return product

  } else { // IF PRICE IS FIXED
    const utility = product.price ? ((parseFloat(product.price) / parseFloat(cost)) - 1) * 100 : 0
    product['utility'] = utility.toFixed(2)

    const utility2 = product.price2 ? ((parseFloat(product.price2) / parseFloat(cost)) - 1) * 100 : 0
    product['utility2'] = utility2.toFixed(2)

    const utility3 = product.price3 ? ((parseFloat(product.price3) / parseFloat(cost)) - 1) * 100 : 0
    product['utility3'] = utility3.toFixed(2)

    return product
  }

}

function fromUtility(product, utility, priceField, sellPriceField) {
  if (product.cost_based) {
    const iv1 = (product.use_taxes && product.taxes) ? parseFloat(product.taxes) / 100 : 0
    const iv2 = (product.use_taxes2 && product.taxes2) ? parseFloat(product.taxes2) / 100 : 0

    const price = product.cost && utility ? parseFloat(product.cost) * (1 + (parseFloat(utility) / 100)) : 0
    product[priceField] = price.toFixed(2)

    const sellPrice = (price * iv1) + (price * iv2) + price
    product[sellPriceField] = sellPrice.toFixed(2)

    return product
  }

  return product
}

function taxesChanged(product) {

  if (product.cost_based) {
    product = fromCost(product, product.cost)
    return product

  } else {
    product = fromPrice(product, product.price, 'sell_price', 'utility')
    product = fromPrice(product, product.price2, 'sell_price2', 'utility2')
    product = fromPrice(product, product.price3, 'sell_price3', 'utility3')

    return product
  }

}
