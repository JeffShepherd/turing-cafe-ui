import React from 'react'
import Reservation from '../Reservation/Reservation.js'
import './ResDashboard.css'

const ResDashboard = ({ reservations }) =>{
  const reservationCards = reservations.map((reservation) => {
    return <Reservation 
              id={reservation.id} 
              name={reservation.name} 
              date={reservation.date} 
              time={reservation.time} 
              number={reservation.number}  
            />
  })



  return <section>{reservationCards}</section>
}



export default ResDashboard