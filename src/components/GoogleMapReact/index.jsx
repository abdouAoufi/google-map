import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import dark from '../mapStyles'
import addresses from '../addresses';

const AnyReactComponent = ({ text }) => <div style={{ color: '#fff' }}>{text}</div>;

class GMR extends Component {
  static defaultProps = {
    center: {
      lat: addresses[0].lat,
      lng: addresses[0].lng
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC6iKLVzr34W23jAZDT3HlrElOHfK6IH_w" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{ styles: dark }}

        >
          {addresses.map((address, index) => {
            return (
              <AnyReactComponent
                key={index}
                lat={address.lat}
                lng={address.lng}
                text="My Marker"
                key={index}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GMR;