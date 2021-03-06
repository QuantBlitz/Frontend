import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import WatchlistItem from '../atoms/WatchlistItem'

import Style from '../styles/components/Watchlist'

const Watchlist = (props) => {
  return (
    <div className='center' styleName='root'>
      { props.data.length < 1 ? <h4>Stocks You're Currently Tracking</h4> : '' }
      <div className='row' styleName='list'>
        <div className='col s12 offset-s2'>
        { props.data.map(item => <WatchlistItem key={create().value} {...item} />) }
        </div>
      </div>
    </div>
  )
}

Watchlist.propTypes = {
  data: PropTypes.array.isRequired
}

export default CSSModules(Watchlist, Style)
