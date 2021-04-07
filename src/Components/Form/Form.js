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

  handleChange = (data, dataCategory) => {
    this.setState({ [dataCategory]: data})
    console.log(this.state)
  }


render() {
  return (
    <form>
      <input placeholder="Name" onChange={(event) => this.handleChange(event.target.value, 'name')}></input>
      <input placeholder="Date (mm/dd)" onChange={(event) => this.handleChange(event.target.value, 'date')}></input>
      <input placeholder="Time" onChange={(event) => this.handleChange(event.target.value, 'time')}></input>
      <input placeholder="Number of Guests" onChange={(event) => this.handleChange(event.target.value, 'number')}></input>
      <button>Make Reservation</button>
    </form>
  )



}

}


export default Form