import React from "react";

import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import defaultStackNavigatorConfigs from "components/navigator";

const Map = () => (
  <View>
    <Text>Map goes here</Text>
  </View>
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
