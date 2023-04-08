import React from 'react'
import "././styles/Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className='columns'>
            <div className='col col-1'>
                <h1 className='footer-header'>Menu</h1>
                <Link to = "/">Home</Link>
                <Link to = "/cart">Cart</Link>
                <Link to = "/info">Info</Link>
            </div>
            <div className='col col-2'>
                <h1 className='footer-header'>More...</h1>
                <Link to = "/">Lorem</Link>
                <Link to = "/">ipsum</Link>
                <Link to = "/">dolor</Link>
            </div>
            <div className='col col-3'>
                <h1 className='footer-header'>Social</h1>
                <Link to = "/">Facebook</Link>
                <Link to = "/">Instagram</Link>
                <Link to = "/info">Twitter</Link>
            </div>
        </div>
        <p className='copyright'>&copy; 2023 All Rights Reserved</p>
    </div>

  )
}

export default Footer