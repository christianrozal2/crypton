import React from 'react'
import { hero, left_arrow, right_arrow, slanted_arrow } from '../assets/assets'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='hero container'>
      <div className='hero__left'>
        <h1>
          live and <img src={slanted_arrow} alt="slanted_arrow" /><br/>
          on-demand<br/>
          trading
        </h1>
        <p>
          Lorem ipsum dolor sit amet. Qui consequatur sint 33 volupta officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.
        </p>
        <div className='hero__explore__group'>
          <Button className='button__larger' label='Explore Now' />
          <div className='hero__count__group'>
            <img src={left_arrow} alt="left_arrow" />
            <p>
              01-<span>03</span>
            </p>
            <img src={right_arrow} alt="right_arrow" />
          </div>
        </div>
      </div>
      <div className='hero__right'>
        <img src={hero} alt="hero" />
      </div>
    </section>
  )
}

export default Hero