import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import { formatIntCommas } from '../utils/utils'

import Style from '../styles/atoms/PortfolioItem'

const PortfolioItem = (props) => {
  return (
    <div className='card grey lighten-4 col s4' styleName='root'
        onClick={() => props.onClick(props.id)}>
      <div className='card-content blue-grey-text text-darken-1'>
        <p>{ props.symbol } ${ formatIntCommas(+props.price) }</p>
        <p>Shares: { props.shares }</p>
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  // price: PropTypes.string.isRequired,
  shares: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired
}

export default CSSModules(PortfolioItem, Style)
