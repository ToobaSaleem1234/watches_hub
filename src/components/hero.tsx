import React from 'react'
import "../styles/hero.css"

const Hero = () => {
  return (
    <div>
      <section className='hero' style={{ backgroundImage: "url(hero_bg.jpg)" }}>
        <div className='home'>
          <h1 className='fade-in'>Welcome To Watch Hub</h1>
          <p>Your one-stop shop for the best watches</p>
          <button>Shop Now</button>
        </div>

      </section>
    </div>
  )
}

export default Hero