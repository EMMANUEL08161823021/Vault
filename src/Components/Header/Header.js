import React from 'react'
import Logo from "../Assets/Vault-Logo-2.webp";
import '../Header/Header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import Sidebar from '../Sidebar/Sidebar'

const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='header'>
      <div className={`header-nav-wrapper ${open ? 'open' : ''}`}> 
        <div className={`vaultLogo ${open ? 'open' : ''}`}>
          <img src={Logo}/>
          <div className={`menuItem ${open ? 'open' : ''}`} onClick={()=> {
            setOpen(!open)


          }}>
            <span className='one'></span>
            <span className='two'></span>
            <span className='three'></span>
          </div> 
        </div>
        <ul className={open ? 'open' : ''}>
          <div className='brief'>
            <span>01</span>
            <li><a href='#Works'>How it works</a></li>
          </div>
          <div className='brief'>
            <span>02</span>
            <li><a href='#About'>About Us</a></li>
          </div>
          <div className='brief'>
            <span>03</span>
            <li><a href='#Brief'>FAQ</a></li>
          </div>

          <Link to="/coins">
            <button>Explore Now</button>
          </Link>
   

          {/* <Sidebar/> */}


          
        </ul>
      </div>

    </div>
  )
}

export default Header