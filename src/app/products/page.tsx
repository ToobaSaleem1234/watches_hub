import React from 'react'
import "./product.css"

const Product = () => {
const products=[
    {
        id:1,
        title:"GMT-Master II",
        price:"14000",
        desc:"Two-times-zone, uniquely iconic",
        image:"/watch1.jpg"
    },
    {
        id:2,
        title:"DayDate",
        price:"9000",
        desc:"A witness to most memorable dates",
        image:"/watch2.jpg"
    },
    {
        id:3,
        title:"SubMariner",
        price:"10000",
        desc:"The supreme diver's watch",
        image:"/watch3.jpg"
    },
    {
        id:4,
        title:"Explorer",
        price:"13000",
        desc:"To keep your headings remember",
        image:"/watch4.jpg"
    },
    {
        id:5,
        title:"Comfort",
        price:"16000",
        desc:"A watch for your all needs",
        image:"/watch5.jpg"
    },
    {
        id:6,
        title:"Datejust",
        price:"6000",
        desc:"A watch for the dates to remember",
        image:"/watch6.jpg"
    },
] 
 
    return (
    <div className='watches-container'>
        <h1 className='fade-in'>Our Products:</h1>
        <div className='watches-content'>
            {products.map((watch)=>(
                <div key={watch.id} className='watch-card'>
                    <img src={watch.image} alt={watch.title} />
                    <h3>{watch.title}</h3>
                    <p>{watch.desc}</p>
                    <span>Rs.{watch.price}</span>
                    <br />
                    <button type='submit'>Add to Cart</button>
                </div>

            ))}
        </div>
    </div>
  )
}

export default Product