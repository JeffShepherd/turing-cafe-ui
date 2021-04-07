import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }


render() {
  return (
    <form>
      <input placeholder="Name"></input>
      <input placeholder="Date (mm/dd)"></input>
      <input placeholder="Time"></input>
      <input placeholder="Number of Guests"></input>
      <button>Make Reservation</button>
    </form>
  )



}

}


export default Form