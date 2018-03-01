import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import Select2 from 'react-select2-wrapper'

@connect((store) => {
  return {
    product: store.products.productActive,
    products: store.products.products,
    productDepartments: store.productDepartments.productDepartments,
    productSubDepartments: store.productSubDepartments.productSubDepartments
  }
})

class Form3 extends React.Component {

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
          <label>Descripción</label>
          <input value={this.props.product.name} name='description' onChange={this.handleInputChange.bind(this)} type='text'
            className='form-control' />
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
export default withRouter(Form3)
