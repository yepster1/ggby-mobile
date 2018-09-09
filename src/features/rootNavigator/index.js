import React from "react";

import { createBottomTabNavigator } from "react-navigation";
import { View, Text } from "react-native";
import Info from "features/info";

const RootNavigator = createBottomTabNavigator({
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

export default RootNavigator;
