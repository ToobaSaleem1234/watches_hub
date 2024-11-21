import React from 'react'
import "../about/about.css"
const About = () => {
    return (
        <div>
            <section className='about-container'style={{backgroundImage:"url(about_bg.jpg)"}}>
                <div className='about-content'>
                    <h2 className='fade-in'>About Us</h2>
                    <p>The Watch Hub collection offers a wide range of prestigious, high-precision timepieces, from Professional to Classic models to suit any wrist.The best gifts have style, substance, and sustainable designs.</p>
                </div>
            </section>
        </div>
    )
}

export default About