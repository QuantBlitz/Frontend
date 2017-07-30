import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import PortfolioSummary from './PortfolioSummary'
import Loader from '../atoms/Loader'
import PortfolioItem from '../atoms/PortfolioItem'

import Style from '../styles/components/Portfolio'

const Portfolio = (props) => {
  return (
    <div className='center' styleName='root'>
      { !props.summary.name ? <Loader /> : 
        <PortfolioSummary {...props.summary} trades={props.trades} /> }
      <div className='row'>
        { props.data.map(item =>
            <PortfolioItem key={create().value}
              onClick={props.onClick} {...item} />
          ) }
      </div>
    </div>
  )
}

export default CSSModules(Portfolio, Style)
