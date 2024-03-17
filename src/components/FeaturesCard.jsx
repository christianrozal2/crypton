import React from 'react'

const FeaturesCard = ({card}) => {
  return (
    <div className='features__card'>
      <div className='features__title__group'>
        <img src={card.image} alt={card.title} />
        <p>{card.title}</p>
      </div>
      <p>{card.description}</p>
    </div>
  )
}

export default FeaturesCard