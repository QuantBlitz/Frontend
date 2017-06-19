import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import EmptyAvatar from '../assets/empty_avatar.svg'

import Style from '../styles/atoms/Avatar'

const Avatar = (props) => {
  return (
    <div styleName='root' onClick={props.onClick}>
      <div className={props.className || 'col s4 offset-s5'}>
        <img src={props.avatarURL || '/' + EmptyAvatar} styleName='avatar' />
      </div>
    </div>
  )
}

Avatar.propTypes = {
  avatarURL: PropTypes.string
}

export default CSSModules(Avatar, Style)
