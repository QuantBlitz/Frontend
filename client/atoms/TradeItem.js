import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import { formatIntCommas } from '../utils/utils'

import Style from '../styles/atoms/TradeItem'

const TradeItem = (props) => {
  return (
    <div className='collection-item grey lighten-4' styleName='root'>
      <a className='blue-grey-text text-darken-1'>
        { props.action }
      </a>
      <a className='blue-grey-text text-darken-1'>
        { props.symbol } ${ formatIntCommas(+props.price) }
      </a>
      <a className='blue-grey-text text-darken-1'>
        Shares: { props.shares }
      </a>
    </div>
  )
}

TradeItem.propTypes = {
  action: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  shares: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
}

export default CSSModules(TradeItem, Style)
