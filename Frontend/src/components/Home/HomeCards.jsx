import React from 'react'
import { FaTruck } from "react-icons/fa";

const HomeCards = () => {
  return (
    <div className='home-cards'>
        <div className='card__content'>
            <FaTruck size={24}/>
            <div className='card__info'>
                <h3>Envios Gratis!</h3>
                <p>Disfruta de envios gratis con compras superiores a $50.000</p>
            </div>
        </div>
        <div className='card__content card__content--outline'>
            <FaTruck size={24}/>
            <div className='card__info'>
                <h3>Envios Gratis!</h3>
                <p>Disfruta de envios gratis con compras superiores a $50.000</p>
            </div>
        </div>
        <div className='card__content'>
            <FaTruck size={24}/>
            <div className='card__info'>
                <h3>Envios Gratis!</h3>
                <p>Disfruta de envios gratis con compras superiores a $50.000</p>
            </div>
        </div>
    </div>
  )
}

export default HomeCards