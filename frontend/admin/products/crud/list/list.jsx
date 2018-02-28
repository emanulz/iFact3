/*
 * Module dependencies
 */
import React from 'react'
import {connect} from 'react-redux'
import DataTable from '../../../../dataTable/dataTable.jsx'
import { getItemDispatch } from '../../../../utils/api.js'

@connect((store) => {
  return {
    fething: store.fetching.fetching,
    products: store.products.products
  }
})
export default class List extends React.Component {

  componentWillMount() {

    this.props.dispatch({type: 'FETCHING_STARTED', payload: ''})
    this.props.dispatch({type: 'CLEAR_PRODUCT', payload: ''})

    const productKwargs = {
      url: '/api/products',
      successType: 'FETCH_PRODUCT_FULFILLED',
      errorType: 'FETCH_PRODUCT_REJECTED'
    }

    this.props.dispatch(getItemDispatch(productKwargs))

  }

  render() {

    const headerOrder = [
      {
        field: 'code',
        text: 'Código',
        type: 'primary'
      }, {
        field: 'name',
        text: 'Nombre'
      }
    ]

    const fetching = <div />
    const list = <DataTable headerOrder={headerOrder} model='products' data={this.props.products}
      addLink='/admin/products/add' idField='id' />

    const content = this.props.fetching ? fetching : list

    return <div className='list list-container'>
      <h1>Listado Productos:</h1>
      {content}
    </div>

  }

}
