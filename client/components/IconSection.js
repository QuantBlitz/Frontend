import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import { create } from 'guid'

import { icon_section } from '../assets/site_text.json'

import IconBlock from '../atoms/IconBlock'

import Style from '../styles/components/IconSection'

class IconSection extends PureComponent {
  render() {
    return (
      <div className='container' styleName='root'>
        <div className='row'>
          { icon_section.map(block => <IconBlock key={create().value} {...block} />) }
        </div>
        <br />
      </div>
    )
  }
}

export default CSSModules(IconSection, Style)
