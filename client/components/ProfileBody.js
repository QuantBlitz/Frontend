import React from 'react'
import CSSModules from 'react-css-modules'
import { CartesianGrid, LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts'
import { create } from 'guid'

import StockTrade from '../atoms/StockTrade'

import Style from '../styles/components/ProfileBody'

const data = [
  { date: 'June 9', capital: 100000, pv: 2400, amt: 2400 },
  { date: 'June 10', capital: 90000, pv: 1398, amt: 2210 },
  { date: 'June 11', capital: 110000, pv: 9800, amt: 2290 },
  { date: 'June 12', capital: 156000, pv: 3908, amt: 2000 },
  { date: 'June 13', capital: 74550, pv: 4800, amt: 2181 },
  { date: 'June 14', capital: 105570, pv: 3800, amt: 2500 },
  { date: 'June 15', capital: 134850, pv: 4300, amt: 2100 }
]

const ProfileBody = (props) => {
  const h = window.innerHeight
  const w = window.innerWidth
  return (
    <div className='card-panel' styleName='card'>
      <div styleName='chart'>
        <LineChart width={w * 0.5} height={h * 0.4} data={data}>
          <Line type='monotone' dataKey='capital' stroke='#4F6873' />
          <CartesianGrid stroke='#CFD8DC' />
          <XAxis dataKey='date' />
          <YAxis dataKey='capital' />
          <Tooltip />
        </LineChart>
      </div>
      <div styleName='trades'>
        <h5 styleName='trades-header'>Latest Trades</h5>
        {
          props.trades ? props.trades.map(stock =>
            <StockTrade key={create().value} {...stock} />
          ) : 'User hasn\'t made any trades yet'
        }
      </div>
    </div>
  )
}

export default CSSModules(ProfileBody, Style)
