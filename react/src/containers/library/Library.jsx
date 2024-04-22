import React from 'react'
import { Navbar } from '../../components'
import { NavbarWithAuth } from '../../components'
import ParticleBackground from '../particle-js/ParticleBackground.jsx'

const Library = () => {
  return (
    <div>
      <div className='particles-container'>
        <NavbarWithAuth />
        <div>library</div>
      </div>
    </div>
  )
}

export default Library
