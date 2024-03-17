import React from 'react'

const PortfolioTrackingCard = ({card}) => {
  return (
    <div className='portfolio__card'>
      <p>{card.number}</p>
      <div className='portfolio__card__group'>
        <img src={card.image} alt={card.title} />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    </div>
  )
}

export default PortfolioTrackingCard