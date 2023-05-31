import React from 'react';
import Header from './Main/Header';
import Footer from './Main/Footer';

const Layout = ({ children }) => {
  return (
    <main className='container'>{children}</main>
  )
}

export default Layout