import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

@connect((store) => {
  return {
    product: store.products.productActive
  }
})

class Form2 extends React.Component {

  // HANDLE INPUT CHANGE
  handleInputChange(event) {

    const target = event.target
    let value
    console.log(target.value)
    // const value = target.type === 'checkbox' ? target.checked : target.value
    switch (target.type) {
      case 'checkbox':
      {
        value = target.checked
        break
      }
      case 'number':
      {
        value = parseFloat(target.value)
          ? parseFloat(target.value)
          : 0
        break
      }
      default:
      {
        value = target.value
      }
    }

    const name = target.name
    console.log(target.name)

    const product = {
      ...this.props.product
    }

    product[name] = value

    this.props.dispatch({type: 'SET_PRODUCT', payload: product})
  }

  fieldFocus(ev) {
    ev.target.select()
  }

  render() {

    // ********************************************************************
    // RETURN BLOCK
    // ********************************************************************
    return <div className='col-xs-12 row form-container'>

      <div className='col-xs-12 col-sm-7 fields-container first'>

        <span>Precios</span>
        <hr />
        <div className='form-group row input-block'>
          <div className='col-xs-6 first'>

            <label>Costo</label>
            <input value={this.props.product.cost} name='cost' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>

          <div className='col-xs-6 second'>

            <label>Precio basado en Costo?</label>
            <input checked={this.props.product.cost_based} name='cost_based'
              onChange={this.handleInputChange.bind(this)}
              type='checkbox' className='form-control' />

          </div>
        </div>

        <div className='form-group row input-block'>
          <div className='col-xs-6 first'>

            <label>Utilidad 1 %</label>
            <input value={this.props.product.utility} name='utility' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>

          <div className='col-xs-6 second'>

            <label>Precio 1</label>
            <input value={this.props.product.price} name='price' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>
        </div>

        <div className='form-group row input-block'>
          <div className='col-xs-6 first'>

            <label>Utilidad 2 %</label>
            <input value={this.props.product.utility2} name='utility2' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>

          <div className='col-xs-6 second'>

            <label>Precio 2</label>
            <input value={this.props.product.price2} name='price2' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>
        </div>

        <div className='form-group row input-block'>
          <div className='col-xs-4 first'>

            <label>Utilidad 3 %</label>
            <input value={this.props.product.utility3} name='utility3' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>

          <div className='col-xs-4'>

            <label>Precio 3</label>
            <input value={this.props.product.price3} name='price3' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>

          <div className='col-xs-4 second'>

            <label>Precio 3 IVI</label>
            <input value={this.props.product.price3} name='price3' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>
        </div>

      </div>

      <div className='col-xs-12 col-sm-5 fields-container second'>

        <span>Impuestos, Inventarios, Decuentos</span>
        <hr />

      </div>
    </div>
  }
}

// EXPORT THE CLASS WITH ROUTER
export default withRouter(Form2)
