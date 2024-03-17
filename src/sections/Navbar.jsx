import React from 'react'
import { logo } from '../assets/assets'
import { navLinks } from '../constants/constants'
import Button from '../components/Button'

const Navbar = () => {
  return (
    <nav className='container' >
      <div>
        <div>
          <img src={logo} alt="logo" />
          <p>Crypton</p>
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>{link.title}</li>
          ))}
          <Button label='Sign In' />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar