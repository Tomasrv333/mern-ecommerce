import { Link } from 'react-router-dom'

const Header = () => {
    
    const content = (
        <header className='header'>
            <div className='header__container'>
                <Link to='/'>
                    <h1 className='header__title'>E-commerce Project</h1>
                </Link>
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
