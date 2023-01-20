import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/index'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import ProductList from './features/products/ProductList'
import UsersList from './features/users/UsersList'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='login' element={<Login />} />
            
                <Route path='dash' element={<DashLayout />}>
                    
                    <Route index element={<Welcome />} />

                    <Route path='products'>
                        <Route index element={<ProductList />} />
                    </Route>

                    <Route path='users'>
                        <Route index element={<UsersList />} />
                    </Route>

                </Route>

            </Route>
        </Routes>
    )
}

export default App