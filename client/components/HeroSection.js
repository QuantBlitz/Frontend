import React from 'react'

const HeroSection = (props) => {
  return (
    <div className='section no-pad-bot' id='index-banner'>
      <div className='container'>
        <br />
        <h1 className='header center blue-grey-text text-darken-2'>Play. Learn. Conquer.</h1>
        <div className='row center'>
          <h5>A modern virtual trading platform</h5>
        </div>
        <div className='row center'>
          <a className='btn-large waves-effect waves-light blue-grey lighten-4 blue-grey-text text-darken-2' href='#' onClick={props.onClick}>
            Start Trading
          </a>
        </div>
        <br />
      </div>
    </div>
  )
}

export default HeroSection
