import React from "react";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import { View, Text } from "react-native";
import Info from "features/info";

// NOTE: If the RootNavigator get any more complex (i.e.  accounts/registration
// features) we'll probably want to move this into its own feature dir. For
// now, the RootNavigator below is pretty much just providing a header.

const ApplicationNavigator = createBottomTabNavigator({
  Schedule: () => (
    <View>
      <Text>Schedule</Text>
    </View>
  ),
  Map: () => (
    <View>
      <Text>Map</Text>
    </View>
  ),
  Info
});

const RootNavigator = createStackNavigator(
  {
    Application: {
      screen: ApplicationNavigator
    }
  },
  {
    navigationOptions: {
      title: "GGBY 2018"
    }
  }
);

export default RootNavigator;
