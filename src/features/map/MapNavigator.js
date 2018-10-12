import React from "react";

import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import defaultStackNavigatorConfigs from "components/navigator";

import { MapView } from 'expo';
import { Overlay } from 'react-native-maps';
import fruitbowl from '../assets/images/fruit-bowl.png';

this.state = {
  overlay_bounds: [[47.643854,-122.308841],[47.640853,-122.303558]],
};

Expo.Permissions.getAsync(Expo.Permissions.LOCATION);

const Map = () => (
  <MapView
    style={{ flex: 1 }}
    region={{
      latitude: 47.642234,
      longitude: -122.305725,
      latitudeDelta: 0.004,
      longitudeDelta: 0.005,
    }}
    showsUserLocation={true}
    showsMyLocationButton={true}
  >
  <Overlay
    image={fruitbowl}
    bounds={this.state.overlay_bounds}
  />
  </MapView>
);

const MapNavigator = createStackNavigator(
  {
    Map: {
      screen: Map
    }
  },
  defaultStackNavigatorConfigs
);

export default MapNavigator;
