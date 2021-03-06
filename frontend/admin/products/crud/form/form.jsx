import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setItem, getItemDispatch } from '../../../../utils/api'
import Select2 from 'react-select2-wrapper'

@connect((store) => {
  return {
    product: store.products.productActive,
    products: store.products.products,
    productDepartments: store.productDepartments.productDepartments,
    productSubDepartments: store.productSubDepartments.productSubDepartments
  }
})

class Form extends React.Component {
  // REACT METHODS
  componentWillMount() {

    this.props.dispatch({type: 'CLEAR_PRODUCT', payload: ''})
    this.props.dispatch({type: 'CLEAR_NEXT_PREV_PRODUCT', payload: ''})

    // Fetch the elements of the Departments model and dispatch to reducer
    // *******************************************************************
    const productDepartmentKwargs = {
      url: '/api/productdepartments',
      successType: 'FETCH_PRODUCT_DEPARTMENTS_FULFILLED',
      errorType: 'FETCH_PRODUCT_DEPARTMENTS_REJECTED'
    }
    this.props.dispatch({type: 'FETCHING_STARTED', payload: ''})
    this.props.dispatch(getItemDispatch(productDepartmentKwargs))
    // *******************************************************************

    // Fetch the elements of the Subdepartments model and dispatch to reducer
    // *******************************************************************
    const productSubDepartmentKwargs = {
      url: '/api/productsubdepartments',
      successType: 'FETCH_PRODUCT_SUBDEPARTMENTS_FULFILLED',
      errorType: 'FETCH_PRODUCT_SUBDEPARTMENTS_REJECTED'
    }
    this.props.dispatch({type: 'FETCHING_STARTED', payload: ''})
    this.props.dispatch(getItemDispatch(productSubDepartmentKwargs))
    // *******************************************************************

    if (this.props.update) {

      const lookUp = this.props.location.pathname.split('/').pop()

      const kwargs = {
        lookUpField: 'code',
        url: '/api/products/',
        lookUpValue: lookUp,
        dispatchType: 'SET_PRODUCT',
        dispatchType2: 'SET_PRODUCT_OLD',
        dispatchErrorType: 'PRODUCT_NOT_FOUND',
        lookUpName: 'código',
        modelName: 'Producto',
        redirectUrl: '/admin/products',
        history: this.props.history
      }
      this.props.dispatch({type: 'FETCHING_STARTED', payload: ''})
      this.props.dispatch(setItem(kwargs))

    }
  }

  componentWillUpdate(nextProps) {

    if (this.props.update) {

      const lookUp = this.props.location.pathname.split('/').pop()

      if (nextProps.product.id == '0000000000') {

        console.log('UPDATE FORM 1 and ID')

        const kwargs = {
          lookUpField: 'code',
          url: '/api/products/',
          lookUpValue: lookUp,
          dispatchType: 'SET_PRODUCT',
          dispatchType2: 'SET_PRODUCT_OLD',
          dispatchErrorType: 'PRODUCT_NOT_FOUND',
          lookUpName: 'código',
          modelName: 'Producto',
          redirectUrl: '/admin/products',
          history: this.props.history
        }
        this.props.dispatch({type: 'FETCHING_STARTED', payload: ''})
        this.props.dispatch(setItem(kwargs))

      }
    }
  }

  // HANDLE INPUT CHANGE
  handleInputChange(event) {

    const target = event.target
    let value

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
    // SELECT2 DATA
    // ********************************************************************
    const departments = this.props.productDepartments
    const subDepartments = this.props.productSubDepartments

    departments.sort((a, b) => {
      return a.code - b.code
    })

    const departmentData = departments.map(department => {
      return {text: `${department.code} - ${department.name}`, id: `${department.id}`}
    })

    const filteredSubDepartments = subDepartments.filter(el => {
      return el.department == this.props.product.department
    })
    filteredSubDepartments.sort((a, b) => {
      return a.code - b.code
    })
    const subDepartmentData = filteredSubDepartments.map(subdepartment => {
      return {text: `${subdepartment.code} - ${subdepartment.name}`, id: subdepartment.id}
    })

    // ********************************************************************
    // RETURN BLOCK
    // ********************************************************************
    return <div className='col-xs-12 row form-container'>

      <div className='col-xs-12 col-sm-6 fields-container first'>

        <span>Códigos y Descripción</span>
        <hr />

        <div className='form-group row input-block'>
          <div className='col-xs-12'>

            <label>Código</label>
            <input value={this.props.product.code} name='code' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' />

          </div>

          {/* <div className='col-xs-6 second'>

            <label>Código Base</label>
            <input value={this.props.product.base_code} name='base_code' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' />

          </div> */}
        </div>

        <div className='form-group'>
          <label>Descripción</label>
          <input value={this.props.product.description} name='description' onChange={this.handleInputChange.bind(this)}
            type='text'
            className='form-control' />
        </div>

        <div className='form-group row input-block'>
          <div className='col-xs-6 first'>

            <label>Código de barras</label>
            <input value={this.props.product.barcode} name='barcode' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' />

          </div>

          <div className='col-xs-6 second'>

            <label>Código de barras 2</label>
            <input value={this.props.product.internal_barcode} name='internal_barcode' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' />

          </div>
        </div>

        <div className='form-group row input-block'>

          <div className='col-xs-6 first'>
            <label>Fraccionado</label>
            <input checked={this.props.product.fractioned} name='fractioned'
              onChange={this.handleInputChange.bind(this)}
              type='checkbox' className='form-control' />
          </div>

          <div className='col-xs-6 second'>
            <label>Unidad</label>
            <input value={this.props.product.unit} name='unit' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' />
          </div>
        </div>

        <div className='form-group row input-block'>

          <div className='col-xs-6 first'>
            <label>En consignación</label>
            <input checked={this.props.product.consignment} name='consignment'
              onChange={this.handleInputChange.bind(this)}
              type='checkbox' className='form-control' />
          </div>

          <div className='col-xs-6 second'>
            <label>Genérico</label>
            <input checked={this.props.product.generic} name='generic'
              onChange={this.handleInputChange.bind(this)}
              type='checkbox' className='form-control' />
          </div>
        </div>

      </div>

      <div className='col-xs-12 col-sm-6 fields-container second'>

        <span>Familias y Extras</span>
        <hr />

        <div className='form-group row input-block'>
          <div className='col-xs-6 first'>

            <label>Familia</label>

            <Select2
              name='department'
              value={this.props.product.department}
              className='form-control'
              onSelect={this.handleInputChange.bind(this)}
              data={departmentData}
              options={{
                placeholder: 'Elija una Familia...',
                noResultsText: 'Sin elementos'
              }}
            />

          </div>

          <div className='col-xs-6 second'>

            <label>Sub Familia</label>

            <Select2
              name='subdepartment'
              value={this.props.product.subdepartment}
              className='form-control'
              onSelect={this.handleInputChange.bind(this)}
              data={subDepartmentData}
              options={{
                placeholder: 'Elija una Familia...',
                noResultsText: 'Sin elementos'
              }}
            />

          </div>
        </div>

        <div className='form-group row input-block'>
          <div className='col-xs-6 first'>

            <label>Código del proveedor</label>
            <input value={this.props.product.supplier_code} name='supplier_code'
              onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' />

          </div>

          <div className='col-xs-6 second'>

            <label>Modelo</label>
            <input value={this.props.product.model} name='model' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' />

          </div>
        </div>

        <div className='form-group row input-block'>
          <div className='col-xs-6 first'>

            <label>Número de parte</label>
            <input value={this.props.product.part_number} name='part_number'
              onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' />

          </div>

          <div className='col-xs-6 second'>

            <label>Código de marca</label>
            <input value={this.props.product.brand_code} name='brand_code' onChange={this.handleInputChange.bind(this)}
              type='text' className='form-control' />

          </div>
        </div>

        <div className='form-group'>
          <label>Activo?</label>
          <input checked={this.props.product.is_active} name='is_active'
            onChange={this.handleInputChange.bind(this)}
            type='checkbox' className='form-control' />
        </div>

      </div>

    </div>
  }
}

// EXPORT THE CLASS WITH ROUTER
export default withRouter(Form)
