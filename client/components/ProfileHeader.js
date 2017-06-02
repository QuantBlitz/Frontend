import React from 'react'
import CSSModules from 'react-css-modules'

import Avatar from '../atoms/Avatar'

import Style from '../styles/components/ProfileHeader'

const ProfileHeader = ({ user }) => {
  const uname = user.length > 8 ? user.slice(0, 8) + '...' : user
  const style = user.length > 8 ? 'uname-s' : (user.length > 5 ? 'uname-m' : 'uname-l')
  return (
    <div styleName='root'>
      <div className='card-panel' styleName='card'>
        <div>
          <Avatar className='col s4' />
          <h4 styleName={style}>
            { uname || '' }
          </h4>
          <span styleName='icon-box'>
            <i className='material-icons'>exit_to_app</i> Jan 17'
          </span>
          <span styleName='icon-box'>
            <i className='material-icons'>room</i> Valhalla
          </span>
        </div>
        <div className='push-s6' styleName='bio'>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
        </div>
      </div>
    </div>
  )
}

export default CSSModules(ProfileHeader, Style)
