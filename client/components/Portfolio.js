import React from 'react'
import { create } from 'guid'
import CSSModules from 'react-css-modules'

import PortfolioItem from '../atoms/PortfolioItem'
import PortfolioSummary from './PortfolioSummary'

import Style from '../styles/components/Portfolio'

const Portfolio = (props) => {
  return (
    <div className='center' styleName='root'>
      <PortfolioSummary {...props.summary} trades={props.trades} />
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
