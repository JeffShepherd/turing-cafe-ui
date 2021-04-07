import React, { Component } from 'react';
import ResDashboard from '../ResDashboard/ResDashboard.js'
import Form from '../Form/Form.js'
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      reservations: []
    }

  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
      .then((response) => response.json())
      .then((reservationData) => this.setState({ reservations: reservationData}))
      .catch((error) => console.log(error))
  }

  addReservation = (reservation) => {
    this.setState({ reservations: [reservation, ...this.state.reservations]})
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation} />
        <ResDashboard reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
