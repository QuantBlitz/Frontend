import React, { PureComponent } from 'react'
import Particles from 'react-particles-js'

import { particles } from '../assets/particles-grab-config.json'

class Particle extends PureComponent {
  render() {
    return (
      <Particles style={{ position: 'absolute' }} params={{ particles }} />
    )
  }
}

export default Particle
