import React from 'react';
import Websocket from 'react-websocket';
import request from 'superagent';

const LEDComponent = React.createClass ({

  getInitialState: function() {
    //this will hold all the data being read and posted to the file
    return {ledStatus: 0};
  },

  handleFormSubmit: function() {

    // Superagent alternative to jQuery
    request.post('http://devices.webofthings.io/pi/actuators/display/content/')
    .set('Content-Type', 'application/json')
    .send({"value": this.state.formText.value})
    .end((err, res) => {
      if(err) {
        console.log('Error' + err);
        return;
      }

      this.setState({ledStatus: 1});
      console.log('Successful HTTP request');
    })
  },

  render: function() {
    return (
      <div>
        <h2>Dispay Component</h2>
          <form id="message-form">
            <input type="text" value={this.state.value} placeholder="Your message..." />
            <button type="submit" onClick={this.handleFormSubmit}>Submit</button>
          </form>
        // <button onClick={this.handleOnButtonClick}>On</button>
        // <p>LED State: {this.state.ledStatus}</p>
      </div>
    );
  }
});

export default LEDComponent;
