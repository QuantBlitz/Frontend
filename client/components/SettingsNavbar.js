import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import Style from '../styles/components/SettingsNavbar'

const SettingsNavbar = (props) => {
  return (
    <div className='row' styleName='root'>
      <div className='col s3 offset-s3 center' styleName='option'
        onClick={() => props.onClick('account')}>
        <h5 className='blue-grey-text text-darken-1'>Account</h5>
      </div>
      <div className='col s3 center' styleName='option'
        onClick={() => props.onClick('details')}>
        <h5 className='blue-grey-text text-darken-1'>Details</h5>
      </div>
    </div>
  )
}

export default CSSModules(SettingsNavbar, Style)
