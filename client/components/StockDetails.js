import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import { formatIntCommas } from '../utils/utils'

import NumberInput from '../atoms/NumberInput'

import Style from '../styles/components/StockDetails'

const StockDetails = (props) => {
  const aClass = 'btn waves-effect blue-grey lighten-4'
  return (
    <div className='container'>
      <h5>{ props.Symbol } {props.Name}</h5>
      <h6>
        ${ formatIntCommas(+props.LastTradePriceOnly) } &nbsp;
        { props.Change }%
      </h6>
      <NumberInput onChange={props.onChange} value={props.value} />
      <span>
        <a className={aClass} styleName='btn'
          onClick={() => props.onClick('buy')}>
          <i className='material-icons'>check</i>
        </a>
        <a className={aClass} styleName='btn'
          onClick={() => props.onClick('sell')}>
          <i className='material-icons'>close</i>
        </a>
        <a className={aClass} styleName='btn'
          onClick={() => props.onClick('watch')}>
          <i className='material-icons'>add</i>
        </a>
      </span>
    </div>
  )
}

StockDetails.propTypes = {
  Change: PropTypes.string.isRequired,
  LastTradePriceOnly: PropTypes.string.isRequired,
  Message: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  Name: PropTypes.string.isRequired,
  Symbol: PropTypes.string.isRequired
}

export default CSSModules(StockDetails, Style)
