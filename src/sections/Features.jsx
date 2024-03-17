import React from 'react'
import { features } from '../assets/assets'
import { featuresCard } from '../constants/constants'
import FeaturesCard from '../components/FeaturesCard'

const Features = () => {
  return (
    <section className='features container'>
      <div className='features__left'>
        <img src={features} alt='features' />
      </div>
      <div className='features__right'>
        <p>FEATURES</p>
        <h2>Crypto Premium</h2>
        <ul>
          {featuresCard.map((index) => (
            <FeaturesCard key={index.id} card={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Features