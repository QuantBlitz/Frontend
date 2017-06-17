import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { CartesianGrid, Legend, LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts'

import Style from '../styles/components/StockChart'

let StockChart = (props) => {
  const h = window.innerHeight
  const w = window.innerWidth
  const data = props.history.slice(0, 14)
  return (
    <div>
      <div styleName='chart'>
        <LineChart width={w * 0.5} height={h * 0.4} data={data}>
          <Line type='monotone' dataKey='high' stroke='#4F6873' />
          <Line type='monotone' dataKey='close' stroke='#8B0000' />
          <Line type='monotone' dataKey='low' stroke='#4F6873' />
          <Legend verticalAlign="top" height={36}/>
          <CartesianGrid stroke='#CFD8DC' />
          <XAxis dataKey='date' />
          <YAxis domain={['dataMin', 'dataMax']} />
          <Tooltip dataKey='volume' />
        </LineChart>
      </div>
    </div>
  )
}

export default CSSModules(StockChart, Style)
