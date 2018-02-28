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
        modelName: 'Familia de Producto',
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

        const kwargs = {
          lookUpField: 'code',
          url: '/api/products/',
          lookUpValue: lookUp,
          dispatchType: 'SET_PRODUCT',
          dispatchType2: 'SET_PRODUCT_OLD',
          dispatchErrorType: 'PRODUCT_NOT_FOUND',
          lookUpName: 'código',
          modelName: 'Familia de Producto',
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

        <span>Datos generales</span>
        <hr />

        <div className='form-group'>
          <label>Código</label>
          <input value={this.props.product.code} name='code' onChange={this.handleInputChange.bind(this)} type='text'
            className='form-control' />
        </div>

        <div className='form-group'>
          <label>Descripción</label>
          <input value={this.props.product.name} name='description' onChange={this.handleInputChange.bind(this)} type='text'
            className='form-control' />
        </div>

        <div className='form-group'>
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

        <div className='form-group'>
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

        <div className='form-group'>
          <label>Observaciones</label>
          <textarea value={this.props.product.observations} name='observations'
            style={{resize: 'none'}}
            rows='4'
            onChange={this.handleInputChange.bind(this)}
            className='form-control' />
        </div>

      </div>

    </div>
  }
}

// EXPORT THE CLASS WITH ROUTER
export default withRouter(Form)
