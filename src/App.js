import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyPlace from './components/MyPlace.js'
import './App.css';


class App extends Component {
  static defaultProps = {
    center: { lat: 54.73, lng: 55.97 },
    zoom: 11
  };

  render() {
    return(
      <GoogleMapReact defaultCenter = { this.props.center }
                      defaultZoom = { this.props.zoom } >
        <MyPlace lat={ 54.75 } lng={ 56.04 } />
      </GoogleMapReact>
    )
  }
}

export default App;
