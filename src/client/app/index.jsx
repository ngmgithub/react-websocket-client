import React from 'react'
import ReactDOM from 'react-dom'
import LikesComponent from './LikesComponent.jsx'
import TemperatureComponent from './TemperatureComponent.jsx'
import LEDComponent from './LEDComponent.jsx'

const App = React.createClass({
  render: function () {
    return (
      <div>
        <p>Hello React! And the World!</p>
        <LikesComponent />
        <TemperatureComponent />
        <LEDComponent name='LED 1' />
        <LEDComponent name='LED 2' />
        <LEDComponent name='LED 3' />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
