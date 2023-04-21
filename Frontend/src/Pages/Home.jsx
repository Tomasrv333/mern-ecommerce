import React from 'react'
import Titles from '../components/Titles'
import ProductCard from '../components/ProductCard'
import SearchElement from '../components/SearchCategory'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__background'>
          
      </div>
      <div className='home__content'>
        
        <div className='home__filters'>
          <form>
            <div className='filters__content'>
              <h4>Plant Type</h4>
              <div className='checkbox__content'>
                <input
                  type='checkbox'
                  id='trees'
                  name='trees'
                />
                <label>Trees</label>
              </div>
              <div className='checkbox__content'>
                <input
                  type='checkbox'
                  id='shrubbery'
                  name='shrubbery'
                />
                <label>Shrubbery</label>
              </div>
              <div className='checkbox__content'>
                <input
                  type='checkbox'
                  id='flowers'
                  name='flowers'
                />
                <label>Flowers</label>
              </div>
              <div className='checkbox__content'>
                <input
                  type='checkbox'
                  id='inside'
                  name='inside'
                />
                <label>Inside</label>
              </div>
              <div className='checkbox__content'>
                <input
                  type='checkbox'
                  id='outside'
                  name='outside'
                />
                <label>Outside</label>
              </div>
            </div>
            <div className='filters__content'>
              <h4>Size</h4>
              <div className='checkbox__content'>
                <input
                  type='checkbox'
                  id='small'
                  name='small'
                />
                <label>Small</label>
              </div>
              <div className='checkbox__content'>
                <input
                  type='checkbox'
                  id='medium'
                  name='medium'
                />
                <label>Medium</label>
              </div>
              <div className='checkbox__content'>
                <input
                  type='checkbox'
                  id='large'
                  name='large'
                />
                <label>Large</label>
              </div>
            </div>
          </form>
        </div>

        <div className='home__products'>
          <div className='products__header'>
            <h4>Search</h4>
            <div className='search__content'>
              <SearchElement category='Category'/>
            </div>
          </div>

          <div className='products__cards'>
            <ProductCard
              ProductImg=''
              ProductName='Producto'
              ProductDesc='Product desc...'
              ProductPrice='$0.99'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home