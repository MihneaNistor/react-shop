import React from 'react'
import "./styles/Navbar.css"
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';


function Navbar() {
  return (
    <>
        <h1>Mihnea's Outlet</h1>
        <div className='navbar'>
            <div className='menu'>
                <Link to="/"><HomeIcon fontSize='large'/></Link>
                <Link to="/cart"><ShoppingCartIcon fontSize='large'/></Link>
                <Link to="/info"><InfoIcon fontSize='large'/></Link>
            </div>
        </div>
    </>
  )
}

export default Navbar