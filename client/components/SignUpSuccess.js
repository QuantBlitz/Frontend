import React from 'react'
import CSSModules from 'react-css-modules'

import Style from '../styles/components/SignUpSuccess'

const SignUpSuccess = (props) => {
  return (
    <div styleName='root'>
      Success!
    </div>
  )
}

export default CSSModules(SignUpSuccess, Style)
