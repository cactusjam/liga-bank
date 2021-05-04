import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { marks, mapStyles } from "../../const";

export class MapGoogle extends Component {
  render() {
    return (
      <div className='map__google'>
        <Map
          google={this.props.google}
          zoom={5.05}
          style={mapStyles}
          initialCenter={
            {
              lat: 58.1033905,
              lng: 60.0107421
            }
          }
        >
        {marks.map((mark, index) => <Marker key={index} position={mark} />)}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_API_KEY
})(MapGoogle);
