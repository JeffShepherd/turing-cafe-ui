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
  }

  submitReservation = (event) => {
    event.preventDefault()
    const reminder = this.state
    this.props.addReservation(reminder)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' })
  }

render() {
  return (
    <form>
      <input 
        placeholder="Name" 
        type="text" 
        onChange={(event) => this.handleChange(event.target.value, 'name')}
        value={this.state.name}
      >
      </input>
      <input 
        placeholder="Date (mm/dd)" 
        type="text" 
        onChange={(event) => this.handleChange(event.target.value, 'date')}
        value={this.state.date}
      >
      </input>
      <input 
        placeholder="Time" 
        type="text" 
        onChange={(event) => this.handleChange(event.target.value, 'time')}
        value={this.state.time}
      >
      </input>
      <input 
        placeholder="Number of Guests" 
        type="number" 
        onChange={(event) => this.handleChange(event.target.value, 'number')}
        value={this.state.number}
      >
      </input>
      <button onClick={(event) => this.submitReservation(event)} >Make Reservation</button>
    </form>
  )



}

}


export default Form