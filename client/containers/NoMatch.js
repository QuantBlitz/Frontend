import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

import Style from '../styles/containers/NoMatch'

class NoMatch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      diceResult: 0
    }
  }
  handleClick = () => {
    this.setState({
      diceResult: Math.floor(Math.random() * 6) + 1
    })
  }
  render() {
    const { diceResult } = this.state

    return (
      <div className='container center' styleName='root'>
        <div styleName='header'>
          <h3>You stumbled into nothingness</h3>
          <a className='btn-large waves-effect waves-light blue-grey lighten-4 blue-grey-text text-darken-2' onClick={this.handleClick}>
            Roll Dice
          </a>
        </div>
        <h2 styleName='dice-roll'>{ diceResult ? `You rolled a ${diceResult}!` : '' }</h2>
        <Link to='/'><h5>Take me back home</h5></Link>
      </div>
    )
  }
}

export default CSSModules(NoMatch, Style)
