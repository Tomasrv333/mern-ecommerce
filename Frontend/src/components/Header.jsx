import React from 'react'
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import Dropdown from './Dropdown';

const Header = () => {
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
            <Dropdown 
              trigger={<FaUserCircle size={18}/>}
              menu={[
                <a href='/settings'>Settings</a>,
                <a href='/orders'>Orders</a>,
                <a href='/payment'>Payment Methods</a>
              ]}
            />
            <Dropdown 
              trigger={<FaShoppingCart size={18}/>}
              menu={[
                <a href='/settings'>Settings</a>,
                <a href='/orders'>Orders</a>,
                <a href='/payment'>Payment Methods</a>
              ]}
            /> 
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header