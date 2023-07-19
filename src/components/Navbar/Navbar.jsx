import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <Link to='/' className='link'>
                        <span className='text'>Fast Food</span>
                        <span className="dot">.</span>
                    </Link>

                </div>
                <div className='links'>
                <span>Menu</span>
                <span>Sobre Nosotros</span>
                 <span>Contactanos</span>
                 
                </div>

                <>
                <Link to='/login' className='link'>
                    <button>Inicia Sesion</button>
                </Link>
                </>



            </div>
        </div>
    )
}

export default Navbar