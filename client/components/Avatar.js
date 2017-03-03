import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import Style from '../styles/components/Avatar'

const Avatar = (props) => {
  return (
    <div className='row' styleName='root'>
      <div className='col s4 offset-s5'>
        <img src={props.avatarURL} styleName='avatar' />
      </div>
    </div>
  )
}

Avatar.propTypes = {
  avatarURL: PropTypes.string
}

export default CSSModules(Avatar, Style)
