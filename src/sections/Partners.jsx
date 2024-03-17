import React from 'react'
import { partners } from '../constants/constants'

const Partners = () => {
  return (
    <section className='partners'>
      <ul className='container'>
        {partners.map((partner) => (
          <li key={partner.id}>
            <img src={partner.image} alt="image" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Partners