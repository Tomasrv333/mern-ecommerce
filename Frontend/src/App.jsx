import './main.scss'
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes';
import Home from './Pages/Home'
import Auth from './Pages/Auth';

function App() {

  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes/>}>
            {/* <Route path='/edit-profile' element={<EditProfile />} /> */}
        </Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth />} />
        {/* <Route path='/auth/register' element={<AuthRegister />} /> */}
      </Routes>
    </>
  )
}

export default App
