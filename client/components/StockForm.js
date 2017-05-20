import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import InputResult from '../atoms/InputResult'

import Style from '../styles/components/StockForm'

const StockForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit} styleName='submit'>
        <div className='row'>
          <div className='input-field col s4'>
            <input className='validate' type='text' placeholder='Search symbol here...'
              onChange={props.onChange} value={props.value} />
          </div>
        </div>
      </form>
      {
        props.results.length > 0 ?
        <div className='collection' styleName='list'>
          { props.results.map(item => <InputResult key={create().value} onClick={props.onClick} {...item} />) }
        </div> : ''
      }
    </div>
  )
}

StockForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default CSSModules(StockForm, Style)
