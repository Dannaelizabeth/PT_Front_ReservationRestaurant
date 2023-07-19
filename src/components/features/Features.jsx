import React from "react";
import './Features.scss'
import { Link } from 'react-router-dom'
import burge from "../../images/hero-banner.png"
import fondo from "../../images/hero-banner-bg.png"

const Features = () => {
  return (
    <div className='factures'>
        <div className='container'>
            <div className='left'>
                <span className='subtitle'>Ven y disfruta !</span>
                <h1>Bienvenidos</h1>
                <p>Disfruta momentos inolvidables en compañía de familia y amigos. ¡Reserva tu mesa en nuestro restaurante y crea recuerdos especiales juntos!</p>
                
                <Link to='/reservation' className='link'>
                    <button>Reserva</button>
                </Link>
                
            </div>
            
            <div className="right">
          <figure className="image-container">
            {/* <img className="background-image" src={fondo} alt="Background" /> */}
            <img className="foreground-image" src={burge} alt="Foreground" />
          </figure>
        </div>

    

        </div>
        

    </div>
  )
}

export default Features