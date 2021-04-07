import React from 'react'
import './Reservation.css'

const Reservation = ({ id, name, date, time, number}) => {

return (
  <article id={id} className="res-card">
    <h3>{name}</h3>
    <p>{date}</p>
    <p>{time} pm</p>
    <p>Number of guests: {number}</p>
  </article>
)

}





export default Reservation
