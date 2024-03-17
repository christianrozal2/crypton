import React from 'react'
import { ptCard } from '../constants/constants'
import PortfolioTrackingCard from '../components/PortfolioTrackingCard'

const PortfolioTracking = () => {
  return (
    <section className='portfolio container'>
        <h2>Automated portfolio tracking</h2>
        <p>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.</p>
        <ul>
            {ptCard.map((index) => (
                <PortfolioTrackingCard key={index.id} card={index} />
            ))}
        </ul>
    </section>
  )
}

export default PortfolioTracking