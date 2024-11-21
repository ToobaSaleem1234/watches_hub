import React from 'react'
import "../contact/contact.css"

const Contact = () => {
    return (
        <section>
            <div className='contact-container'>
                <h2 className='fade-in'>Contact Us</h2>
                <form className='contact-form'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder='Enter your full name'required />
                    <label htmlFor="email">E-mail Address:</label>
                    <input type="email" placeholder='Enter your e-mail'required />
                    <label htmlFor="number">Phone:</label>
                    <input type="text" placeholder='Enter your Phone Number' required />
                    <label htmlFor="message">Message:</label>
                    <textarea className="message" rows={6} placeholder='Your Message' required style={{fontSize:"large" , padding:"9px" , fontFamily: "Arial, sans-serif", outline:'none'}}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact