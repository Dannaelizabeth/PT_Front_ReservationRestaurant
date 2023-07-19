import React from 'react'
import Reservation from '../Reservation/Reservation'
import Welcome from '../Welcome/Welcome'
import "./Body.scss"

const Body = () => {
  return (
    <div className='mainContent'>
        <Welcome />

    <div className="bottom flex">
        <Reservation />
    </div>

    </div>
  )
}

export default Body