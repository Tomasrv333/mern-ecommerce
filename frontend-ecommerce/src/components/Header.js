import { Link } from 'react-router-dom'
import * as Unicons from '@iconscout/react-unicons'

const Header = () => {
    
    const content = (
        <header className='header'>
            <div className='header__container'>
                <Link to='/'>
                    <h1 className='header__title'>E-commerce Project</h1>
                </Link>
                <input className='header__input' type='text'></input>
                <div className='header__icons'>
                    <Unicons.UilHeart />
                    <Unicons.UilShoppingBag />
                    <Unicons.UilUserCircle />
                </div>
            </div>
            <nav className='header__nav'>
                    <ul>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='./Categories'>
                            <li>Categories</li>
                        </Link>
                        <Link to='/'>
                            <li>Women</li>
                        </Link>
                        <Link to='/'>
                            <li>Men</li>
                        </Link>
                        <Link to='/'>
                            <li>Discounts</li>
                        </Link>
                    </ul>
                </nav>
                
        </header>
        
    )

    return content
}

export default Header
