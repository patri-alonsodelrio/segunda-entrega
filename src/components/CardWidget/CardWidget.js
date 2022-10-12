import React from 'react'
import { Link } from 'react-router-dom'
import LogoCart from '../../images/icons8-shopping-cart-30.png'

const CardWidget = () => {
  return (
    <div>
        <Link to='/CardWidget'>
          <img
          className='LogoCarrito'
          src={LogoCart} 
          alt='Logo Carrito de Compras'/>
        </Link>
    </div>
  )
}

export default CardWidget