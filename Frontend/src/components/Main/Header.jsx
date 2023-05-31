import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import Sidebar from './Sidebar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='header'>
      <nav className='header__nav nav'>
        <div className='nav__content'>
          <h3 className='nav__title'>E-commerce</h3>
          <div className='nav__input'>
              <input placeholder='Search Product...'></input>
              <IconContext.Provider value={{ className: "nav__input-icon", size: 16 }}>
                <FaSearch/>
              </IconContext.Provider>
          </div>
          <div className='nav__icons-content'>
            <FaUserCircle onClick={toggleSidebar} size={24}/>
          </div>
        </div>
        <div className='nav__content-items'>
          <ul>
            <li>Salsas</li>
            <li>Semillas</li>
            <li>Accesorios</li>
            <li>Herramientas</li>
            <li>Fertilizantes</li>
          </ul>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
    </header>
  )
}

export default Header