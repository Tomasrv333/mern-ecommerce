import React from 'react'
import Titles from '../components/Titles'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__content'>
        <div className='home__background'>
          
        </div>
        <div className='home__features'>
          <Titles title='Feature'/>
          <ProductCard
            ProductImg=''
            ProductName='Producto'
            ProductDesc='Product desc...'
            ProductPrice='$0.99'
          />
        </div>
      </div>
    </div>
  )
}

export default Home