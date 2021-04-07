import React from 'react'
import './Reservation.css'

const Reservation = ({ id, name, date, time, number}) => {

return (
  <article id={id}>
    <p>{name}</p>
    <p>{date}</p>
    <p>{time}</p>
    <p>{number}</p>
  </article>
)

}





export default Reservation
