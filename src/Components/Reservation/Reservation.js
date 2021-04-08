import React from 'react'
import './Reservation.css'

const Reservation = ({ id, name, date, time, number, deleteReservation}) => {

return (
  <article className="res-card">
    <h3>{name}</h3>
    <p>{date}</p>
    <p>{time} pm</p>
    <p>Number of guests: {number}</p>
    <button id={id} onClick={(event) => deleteReservation(event.target.id)}>Cancel</button>
  </article>
)

}





export default Reservation
