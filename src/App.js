import React, { Component } from 'react';
import './App.css';
import './nprogress.css';

import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';

import { getEvents, extractLocations } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    locationSelected: "all",
  }

  updateEvents = (location, maxNumEvents) => {
    if (maxNumEvents === undefined) {
        maxNumEvents = this.state.numberOfEvents;
    } else(
        this.setState({ numberOfEvents: maxNumEvents })
    )
    if (location === undefined) {
        location = this.state.locationSelected;
    }
    getEvents().then((events) => {
        let locationEvents = (location === 'all') 
            ? events 
            : events.filter((event) => event.location === location);
        this.setState({
            events: locationEvents.slice(0, maxNumEvents),
            numberOfEvents: maxNumEvents,
            locationSelected: location
        });
    });
}


  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        let sliceNumber = this.state.numberOfEvents;
        this.setState({
          locations: extractLocations(events),
          events: events.slice(0, sliceNumber),
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }


  render() {
    return (
      <div className="App">
        <NumberOfEvents />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}
export default App;


