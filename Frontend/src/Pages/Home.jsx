import React from 'react'
import ProductCard from '../components/Main/ProductCard'
import Layout from '../components/Layout'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'
import HomeCards from '../components/Home/HomeCards'

const Home = () => {
  return (
    <Layout>
      <Header/>

      <div className='home'>
        <div className='home__background'>

        </div>
        <HomeCards/>
      </div>

      <Footer/>
    </Layout>
    
  )
}

export default Home