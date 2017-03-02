import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import { formatIntCommas } from '../utils/utils'

import NumberInput from '../atoms/NumberInput'

import Style from '../styles/components/StockDetails'

const StockDetails = (props) => {
  return (
    <div className='container'>
      <h5>{ props.Symbol } {props.Name}</h5>
      <h6>${ formatIntCommas(props.LastPrice) } &nbsp; { formatIntCommas(props.Change) }%</h6>
      <NumberInput onChange={props.onChange} value={props.value} />
      <span>
        <a className='btn waves-effect blue-grey lighten-4' styleName='btn'
          onClick={props.onClick} name='buy'>
          <i className='material-icons'>check</i>
        </a>
        <a className='btn waves-effect blue-grey lighten-4' styleName='btn'
          onClick={props.onClick} name='sell'>
          <i className='material-icons'>close</i>
        </a>
        <a className='btn waves-effect blue-grey lighten-4' styleName='btn'
          onClick={props.onClick} name='watch'>
          <i className='material-icons'>add</i>
        </a>
      </span>
    </div>
  )
}

StockDetails.propTypes = {
  Change: PropTypes.number.isRequired,
  LastPrice: PropTypes.number.isRequired,
  Message: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  Name: PropTypes.string.isRequired,
  Symbol: PropTypes.string.isRequired
}

export default CSSModules(StockDetails, Style)
