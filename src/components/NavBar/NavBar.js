import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from '../CardWidget/CardWidget'
import LogoZenMates from '../../images/Logo.png'
import '../../styles/NavBar.css'

const NavBar = () => {
  return (
<header>
        <nav className="container-wid navbar">
            <picture className="logo">
                <Link to='/'>
                    <img 
                    width="40" 
                    height="81"
                    className='logo__img'
                    src={LogoZenMates} 
                    alt='Logo Zen Mates'/>
                </Link>
            </picture>
            <ul className="menu">
            <li className="menu__item">
                    <Link to='/categoria/Mates'>Mates</Link>
                </li>
                <li className="menu__item">
                    <Link to='/categoria/Termos'>Termos</Link>
                </li>
                <li className="menu__item">
                    <a href="/#">Nosotros</a>
                </li>
                <li className="menu__item">
                    <a href="/#">Contacto</a>
                </li>
                <li>
                    <CardWidget/> 
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar