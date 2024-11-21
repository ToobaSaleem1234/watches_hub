import React from 'react'
import Link from 'next/link'
import "../styles/header.css"
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  return (
    <header className='header'>
        <h1 className='heading'>Watch Hub</h1>
        <nav className='links'>
            <a href="/">Home</a>
            <Link href={"/about"} target='_blank'>About</Link>
            <Link href={"/products"} target='_blank'>Products</Link>
            <Link href={"/contact"} target='_blank'>Contact</Link>
            <input className='search-bar' type="text" placeholder='Search your product' />
            <TiShoppingCart size={50}/>
        </nav>
    </header>
  )
}

export default Header