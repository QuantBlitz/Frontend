import React from 'react'
import CSSModules from 'react-css-modules'

import Avatar from '../atoms/Avatar'

import Style from '../styles/components/ProfileHeader'

const ProfileHeader = (props) => {
  return (
    <div className='row' styleName='root'>
      <div className='card-panel' styleName='card'>
        <Avatar className='col s4' />
        {/* <h4 className='col s2 offset-s3'>{ props.username || '' }</h4> */}
      </div>
    </div>
  )
}

export default CSSModules(ProfileHeader, Style)
