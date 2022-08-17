import React, { Component } from 'react';

import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor() {
    super();

    this.state = {
      numberOfEvents: 32,
      errorText: '',
    };
  }

  //user typing into Number of Events Box - changes Events displayed
  //error if number is not between 1-32
  handleInputChanged = (event) => {
    const value = event.target.value;

    if (value > 32 || value < 1 || !event.target.value) {
      this.setState({
        numberOfEvents: value,
        errorText: 'Must be between 1 and 32',
      });
    } else {
      this.setState({
        numberOfEvents: parseInt(value),
        errorText: '',
      });
      this.props.updateEvents('pass', value);
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <p>Number of Events:</p>
        <div className="event-num-wrapper">
          <input
            className="event-input"
            type="number"
            value={this.state.numberOfEvents}
            onChange={this.handleInputChanged}
          ></input>
        </div>
        <ErrorAlert alertName={'error-alert'} text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;