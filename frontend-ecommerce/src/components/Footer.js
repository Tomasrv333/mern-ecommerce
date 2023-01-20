import { useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => navigate('/dash')

    let goHomeButton = null
    if (pathname !== '/dash') {
        goHomeButton = (
            <button className='footer__button icon-button' title='Home' onClick={onGoHomeClicked}>

            </button>
        )
    }

    const content = (
        <footer className='footer'>
            <p>Current user:</p>
        </footer>
    )

    return content
}

export default Footer