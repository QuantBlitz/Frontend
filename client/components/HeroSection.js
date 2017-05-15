import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import Style from '../styles/components/HeroSection'

const HeroSection = (props) => {
  return (
    <div className='section no-pad-bot' id='index-banner' styleName='root'>
      <div className='container'>
        <br />
        <h3 className='header blue-grey-text text-darken-2'>Play. Learn. Conquer.</h3>
        <div className='row'>
          <h5>A modern virtual trading platform</h5>
        </div>
        <div className='row'>
          <a className='btn-large waves-effect waves-light blue-grey lighten-4 blue-grey-text text-darken-2'
              href='#' onClick={props.onClick}>
            Start Trading
          </a>
        </div>
        <br />
      </div>
    </div>
  )
}

HeroSection.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CSSModules(HeroSection, Style)
