import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {determinAmounts} from '../../actions.js'

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

    let product = {
      ...this.props.product
    }

    product[name] = value

    product = determinAmounts(product, name, value)

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
          <div className='col-xs-8 first'>

            <label>Costo</label>
            <input value={this.props.product.cost} name='cost' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)}
              disabled={!this.props.product.cost_based}
            />

          </div>

          <div className='col-xs-4 second'>

            <label>Precio basado en Costo?</label>
            <input checked={this.props.product.cost_based} name='cost_based'
              onChange={this.handleInputChange.bind(this)}
              type='checkbox' className='form-control' />

          </div>
        </div>

        <div className='form-group row input-block'>
          <div className='col-xs-4 first'>

            <label>Utilidad 1 %</label>
            <input value={this.props.product.utility} name='utility' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)}
              disabled={!this.props.product.cost_based}
            />

          </div>

          <div className='col-xs-4'>

            <label>Precio 1</label>
            <input value={this.props.product.price} name='price' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>

          <div className='col-xs-4 second'>

            <label>Precio 1 IVI</label>
            <input value={this.props.product.sell_price} name='sell_price' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>
        </div>

        <div className='form-group row input-block'>
          <div className='col-xs-4 first'>

            <label>Utilidad 2 %</label>
            <input value={this.props.product.utility2} name='utility2' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>

          <div className='col-xs-4'>

            <label>Precio 2</label>
            <input value={this.props.product.price2} name='price2' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>

          <div className='col-xs-4 second'>

            <label>Precio 2 IVI</label>
            <input value={this.props.product.sell_price2} name='sell_price2' onChange={this.handleInputChange.bind(this)}
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
            <input value={this.props.product.sell_price3} name='sell_price3' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />

          </div>
        </div>

      </div>

      <div className='col-xs-12 col-sm-5 fields-container second'>

        <span>Impuestos y Descuentos</span>
        <hr />

        <div className='form-group row input-block'>
          <div className='col-xs-6 first'>

            <label>Impuesto de Ventas</label>
            <input value={this.props.product.taxes} name='taxes' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />
          </div>

          <div className='col-xs-6 second'>

            <label>Usa Impuesto?</label>
            <input checked={this.props.product.use_taxes} name='use_taxes'
              onChange={this.handleInputChange.bind(this)}
              type='checkbox' className='form-control' />
          </div>
        </div>

        <div className='form-group row input-block'>
          <div className='col-xs-6 first'>

            <label>Impuesto 2</label>
            <input value={this.props.product.taxes2} name='taxes2' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />
          </div>

          <div className='col-xs-6 second'>

            <label>Usa Impuesto 2?</label>
            <input checked={this.props.product.use_taxes2} name='use_taxes2'
              onChange={this.handleInputChange.bind(this)}
              type='checkbox' className='form-control' />
          </div>
        </div>

        <div className='form-group row input-block'>
          <div className='col-xs-6 first'>

            <label>Desc Predeterminado %</label>
            <input value={this.props.product.pred_discount} name='pred_discount'
              onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />
          </div>

          <div className='col-xs-6 second'>

            <label>Pide Precio al facturar?</label>
            <input checked={this.props.product.ask_price} name='ask_price'
              onChange={this.handleInputChange.bind(this)}
              type='checkbox' className='form-control' />
          </div>
        </div>

        <div className='form-group row input-block'>
          <div className='col-xs-6 first'>

            <label>Desc max en promoción %</label>
            <input value={this.props.product.max_sale_discount} name='max_sale_discount'
              onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' onFocus={this.fieldFocus.bind(this)} />
          </div>

          <div className='col-xs-6 second'>

            <label>En promoción?</label>
            <input checked={this.props.product.on_sale} name='on_sale'
              onChange={this.handleInputChange.bind(this)}
              type='checkbox' className='form-control' />
          </div>
        </div>

      </div>
    </div>
  }
}

// EXPORT THE CLASS WITH ROUTER
export default withRouter(Form2)
