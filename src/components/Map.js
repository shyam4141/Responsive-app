import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import { connect } from "react-redux";
import { setLatitude, setLongitude } from "../redux/actions/contactAction";

Geocode.setApiKey("AIzaSyA1eL5WysMmFb7if7R2HmUUC5PPva7vkvo");
Geocode.enableDebug();
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng,
      },
      markerPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng,
      },
    };
  }

  /**
   * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
   *
   * @param nextProps
   * @param nextState
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {}

  /**
   * @param event
   */
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  /**
   * This Event triggers when the marker window is closed
   *
   * @param event
   */
  onInfoWindowClose = (event) => {};
  /**
   * When the user types an address in the search box
   * @param place
   */

  /**
   * When the marker is dragged you get the lat and long using the functions available from event object.
   * Use geocode to get the lat and lng positions.
   * And then set those values in the state.
   *
   * @param event
   */
  onMarkerDragEnd = (event) => {
    console.log("event", event);
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();
    console.log("event lat long", newLat, newLng);
    this.setState({
      mapPosition: {
        lat: newLat,
        lng: newLng,
      },
    });

    console.log("event lat long", newLat, newLng);
    this.props.setLatitude(newLat);
    this.props.setLongitude(newLng);
  };
  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap((props) => (
        <div style={{ position: "revert" }}>
          <GoogleMap
            defaultZoom={this.props.zoom}
            defaultCenter={{
              lat: this.state.mapPosition.lat,
              lng: this.state.mapPosition.lng,
            }}
          >
            <Marker
              google={this.props.google}
              name={"Dolores park"}
              draggable={true}
              onDragEnd={this.onMarkerDragEnd}
              position={{
                lat: this.state.markerPosition.lat,
                lng: this.state.markerPosition.lng,
              }}
            />
            <Marker />
          </GoogleMap>
        </div>
      ))
    );
    let map;
    if (this.props.center.lat !== undefined) {
      map = (
        <>
          <div style={{ position: "revert" }}>
            <AsyncMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAx3usH0OxGDYgBSR0jzMe3H2DwJ3Ia8Rc&libraries=places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: this.props.height }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </>
      );
    } else {
      map = <div style={{ height: this.props.height, position: "revert" }} />;
    }
    return map;
  }
}

const mapStateToProps = (state) => ({
  locationDetails: state.locationDetails,
});

export default connect(mapStateToProps, { setLatitude, setLongitude })(Map);
// export default Map;
