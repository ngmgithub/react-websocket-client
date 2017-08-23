import React from 'react'
import Websocket from 'react-websocket'

const TemperatureComponent = React.createClass({

  getInitialState: function () {
    return {currentTemperature: 'please wait...'}
  },

  onDataReceived: function (data) {
    let result = JSON.parse(data)
    this.setState({currentTemperature: result.value})
  },

  render: function () {
    return (
      <div>
        <h2>Temperature Component</h2>
        Temperature: {this.state.currentTemperature}
        <Websocket url='ws://devices.webofthings.io/pi/sensors/temperature' onMessage={this.onDataReceived/* .bind(this) */} />
      </div>
      // todo: add onError={this.setState({currentTemperature: "Failed to read temperature from websocket"})}
    )
  }

})

export default TemperatureComponent
