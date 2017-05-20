import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import { formatIntCommas } from '../utils/utils'

import Btn from '../atoms/Btn'
import NumberInput from '../atoms/NumberInput'

import Style from '../styles/components/StockOptions'

const StockOptions = (props) => {
  const aClass = 'btn waves-effect blue-grey lighten-4'
  const placeholder = (+props.price + (+props.price * 0.17)).toFixed(2)
  return (
    <div className='center blue-grey-text text-darken-2' styleName='root'>
      <div>
        <h4>{ props.company }</h4>
        <h5>{ props.symbol }</h5>
        <p>{ props.shares } Shares</p>
        <p>Bought At: ${ formatIntCommas(+props.price) }</p>
        <p>Current Price: ${ placeholder }</p>
      </div>
      <NumberInput onChange={props.onChange} />
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
          onClick={() => props.onClick('sell_all')}>
          <i className='material-icons'>block</i>
        </a>
      </span>
    </div>
  )
}

export default CSSModules(StockOptions, Style)
