import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='card'>
        <div className='card__img' style={{backgroundImage: props.ProductImg}}>

        </div>
        <div className='card__content'>
            <h4>{props.ProductName}</h4>
            <p>{props.ProductDesc}</p>
            <span>{props.ProductPrice}</span>
            <button>Carrito</button>
        </div>
    </div>
  )
}

export default ProductCard