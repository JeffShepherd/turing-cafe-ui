import React, { Component } from 'react';
import ResDashboard from '../ResDashboard/ResDashboard.js'
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


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {/* <div className='resy-form'>

        </div> */}
          <ResDashboard reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
