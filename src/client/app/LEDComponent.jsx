// todo: Change this to a DioComponent and make LED a type.

import React from 'react'
import request from 'superagent'

const LEDComponent = React.createClass({

  getInitialState: function () {
    return {ledStatus: false} // todo: replace false with read initial state from device
  },

  handleOnButtonClick: function () {
    // Superagent alternative to jQuery
    request.post('http://devices.webofthings.io/pi/actuators/leds/rgbled1/')
    .set('Content-Type', 'application/json')
    .send('{"value": [0, 255, 0]}') // todo: make this generic to serve more than just an RGB LED
    .end((err, res) => {
      if (err) {
        console.log('Error' + err)
        return
      }

      this.setState({ledStatus: true}) // todo: read back state from Pi to avoid state mismatch.
      console.log('Successful HTTP request. Turn LED on.')
    })
  },

  handleOffButtonClick: function () {
    // Superagent alternative to jQuery
    request.post('http://devices.webofthings.io/pi/actuators/leds/rgbled1/')
    .set('Content-Type', 'application/json')
    .send('{"value": [0, 0, 0]}') // todo: make this generic to serve more than just an RGB LED
    .end((err, res) => {
      if (err) {
        console.log('Error' + err)

        return
      }

      this.setState({ledStatus: false}) // todo: read back state from Pi to avoid state mismatch.
      console.log('Successful HTTP request. Turn LED off.')
    })
  },

  render: function () {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <button onClick={this.handleOnButtonClick} disabled={this.state.ledStatus}>On</button>
        <button onClick={this.handleOffButtonClick} disabled={!this.state.ledStatus}>Off</button>
        <p>LED State: { this.state.ledStatus ? 'On' : 'Off' }</p>
      </div>
    )
  }
})

export default LEDComponent
