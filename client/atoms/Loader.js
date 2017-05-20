import React from 'react'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import Style from '../styles/atoms/Loader'

const Loader = (props) => {
  const segments = ['one', 'two', 'three', 'four']

  return (
    <div styleName='loader'>
      {
        segments.map(seg =>
          <div key={create().value} styleName='segment-holder'>
            <div styleName={seg} />
          </div>
        )
      }
    </div>
  )
}

export default CSSModules(Loader, Style)
