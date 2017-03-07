import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Style from '../styles/atoms/WatchlistItem'

const WatchlistItem = (props) => {
  return (
    <div className='card grey lighten-4 col s3' styleName='root'
      onClick={props.onClick}>
      <div className='card-content blue-grey-text text-darken-1'>
        <span styleName='symbol'>{ props.symbol }</span>
      </div>
    </div>
  )
}

WatchlistItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired
}

export default CSSModules(WatchlistItem, Style)
