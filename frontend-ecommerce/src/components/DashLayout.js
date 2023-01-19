import { Outlet } from 'react-router-dom'
import DashHeader from './Header'
import DashFooter from './DashFooter'

const Layout = () => {
    return (
        <>
            <DashHeader />
            <div className='dash-container'>
                <Outlet />
            </div>
            <DashFooter />
        </>
    )
}

export default Layout