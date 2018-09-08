import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

const RootNavigator = createBottomTabNavigator({
  Schedule: () => <View><Text>Schedule</Text></View>,
  Map: () => <View><Text>Map</Text></View>,
  Info: () => <View><Text>Info</Text></View>,
});

export default RootNavigator;
