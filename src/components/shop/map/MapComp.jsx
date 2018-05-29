import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from "recompose"
import { Container } from './MapCompStyles';


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `90%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 48.866667, lng: 2.333333 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 48.866667, lng: 2.333333 }} />}
  </GoogleMap>
);


export default class MapComp extends Component {
    render() {
        return (
            <Container>
              <MyMapComponent isMarkerShown />
            </Container>
        )
    }
};
