import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import { formatIntCommas } from '../utils/utils'

import Style from '../styles/components/PortfolioSummary'

const PortfolioSummary = (props) => {
  return (
    <ul className='container' styleName='root'>
      <li styleName='info-item'>
        <p>Total Worth</p><p>${ formatIntCommas(+props.capital) }</p>
      </li>
      <li styleName='info-item'>
        <p>Capital</p><p>${ formatIntCommas(+props.capital) }</p>
      </li>
      <li styleName='info-item'>
        <p>Trades Last Month</p><p>{ props.trades }</p>
      </li>
    </ul>
  )
}

PortfolioSummary.propTypes = {
  capital: PropTypes.string,
  name: PropTypes.string
}

export default CSSModules(PortfolioSummary, Style)
