import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import Style from '../styles/components/StockOverview'

const StockOverview = (props) => {
  return (
    <div className='row' styleName='root'>
      <h2 styleName='symbol'>{ props.symbol.toUpperCase() }</h2>
    </div>
  )
}

export default CSSModules(StockOverview, Style)
