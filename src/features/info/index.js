import React from "react";

import { createStackNavigator } from "react-navigation";
import { View, Text } from "react-native";
import defaultStackNavigatorConfigs from "../../components/navigator";

const InfoScreen = () => (
  <View>
    <Text>This is the info screen. Trying something here.</Text>
  </View>
);

const InfoNavigator = createStackNavigator(
  {
    Info: {
      screen: InfoScreen
    }
  },
  defaultStackNavigatorConfigs
);

export default InfoNavigator;
