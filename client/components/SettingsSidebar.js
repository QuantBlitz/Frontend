import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Style from '../styles/components/SettingsSidebar'

const SettingsSidebar = (props) => {
  return (
    <div className='row' styleName='root'>
      <div className='col s2'>
        <div className='collection center'>
          <div className='collection-item'>
            <a name='account' className='blue-grey-text text-darken-1'
              onClick={props.onClick}>
              Account
            </a>
          </div>
          <div className='collection-item'>
            <a name='details' className='blue-grey-text text-darken-1'
              onClick={props.onClick}>
              Details
            </a>
          </div>
          <div className='collection-item'>
            <a name='profile' className='blue-grey-text text-darken-1'
              onClick={props.onClick}>
              Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CSSModules(SettingsSidebar, Style)
