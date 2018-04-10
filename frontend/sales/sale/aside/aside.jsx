/*
 * Module dependencies
 */
import React from 'react'

import Client from '../../general/clients/clients.jsx'
import Totals from '../../general/totals/totals.jsx'
// import Buttons from './buttons/buttons.jsx'
import {connect} from 'react-redux'

@connect((store) => {
  return {
    fullWidth: store.sale.fullWidth
  }
})
export default class Aside extends React.Component {

  toggleWidth () {
    this.props.dispatch({type: 'TOGGLE_FULL_WIDTH', payload: ''})
  }

  // Main Layout
  render () {
    const asideClass = this.props.fullWidth ? 'sale-aside collapsed' : 'sale-aside'
    const asideContainerClass = this.props.fullWidth ? 'sale-aside-content collapsed' : 'sale-aside-content'
    return <div className={asideClass}>
      <div className={asideContainerClass}>
        <div className='sale-aside-arrow'>
          <div className='sale-aside-arrow-container' onClick={this.toggleWidth.bind(this)}>
            <i className='fa fa-chevron-right' />
          </div>
        </div>
        <Client />
        <Totals />
      </div>
      {/* <Buttons /> */}
      <div className='sale-aside-total' >
        $999.565.352,35
      </div>
    </div>
  }

}
