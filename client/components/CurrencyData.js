import React, { PropTypes } from 'react'

const CurrencyData = (props) => {
  return (
    <div>
      <h3>Currency Data</h3>
      <span>{ props.symbol }</span><span>{ props.price }</span>
    </div>
  )
}

CurrencyData.propTypes = {
  price: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired
}

export default CurrencyData
