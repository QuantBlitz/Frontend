import React, { PropTypes } from 'react'
import { create } from 'guid'
import CSSModules from 'react-css-modules'

import TradeItem from '../atoms/TradeItem'

import Style from '../styles/components/PreviousTrades'

const PreviousTrades = (props) => {
  return (
    <div className='center' styleName='root'>
      { props.data.length < 1 ? <h4>Previous Trades</h4> : '' }
      <div className='collection' styleName='list'>
        { props.data.slice(0, 12).map(item => <TradeItem key={create().value} {...item} />) }
      </div>
    </div>
  )
}

PreviousTrades.propTypes = {
  data: PropTypes.array.isRequired
}

export default CSSModules(PreviousTrades, Style)
