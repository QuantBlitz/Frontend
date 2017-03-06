import React from 'react'

const StockNotFound = (props) => {
  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <h5 className='blue-grey-text text-darken-2'>
          No symbol matches found. Try another symbol such as AAPL or TSLA.
        </h5>
      </div>
    </div>
  )
}

export default StockNotFound
