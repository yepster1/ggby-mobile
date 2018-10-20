import React from "react";

import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import defaultStackNavigatorConfigs from "components/navigator";

import { MapView } from 'expo';
import { Overlay } from 'react-native-maps';
import fruitbowl from 'images/fruit-bowl.png';

import mapDetails from "json/map.json";

this.state = {
  overlay_bounds: [mapDetails.bounds.topLeft,mapDetails.bounds.bottomRight],
  center: {
    latitude: (mapDetails.bounds.topLeft[0] + mapDetails.bounds.bottomRight[0])/2,
    longitude: (mapDetails.bounds.topLeft[1] + mapDetails.bounds.bottomRight[1])/2,
    latitudeDelta: Math.abs(mapDetails.bounds.bottomRight[0] - mapDetails.bounds.topLeft[0]),
    longitudeDelta: Math.abs(mapDetails.bounds.bottomRight[1] - mapDetails.bounds.topLeft[1])
  }
};

Expo.Permissions.getAsync(Expo.Permissions.LOCATION);

const Map = () => (
  <MapView
    style={{ flex: 1 }}
    region={this.state.center}
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
