import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';


class App extends Component {
  static defaultProps = {
    center: { lat: 54.73, lng: 55.97 },
    zoom: 11
  };

  render() {
    return(
      <GoogleMapReact defaultCenter = { this.props.center }
                      defaultZoom = { this.props.zoom } />
    )
  }
}

export default App;
