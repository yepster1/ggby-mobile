import React from "react";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import { View, Text } from "react-native";
import Schedule from "features/schedule";
import Info from "features/info";

import TabBarIcon from '../../theme/TabBarIcon';

// NOTE: If the RootNavigator get any more complex (i.e.  accounts/registration
// features) we'll probably want to move this into its own feature dir. For
// now, the RootNavigator below is pretty much just providing a header.

const ApplicationNavigator = createBottomTabNavigator(
  {
    Schedule: {
      screen: Schedule,
      navigationOptions : {
        tabBarLabel: 'Schedule',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={'calendar'}
          />
        ),
      }
    },
    Map: {
      screen: () => (
        <View>
          <Text>Map goes here</Text>
        </View>
      ),
      navigationOptions : {
        tabBarLabel: 'Map',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={'map'}
          />
        ),
      }
    },
    Info9: {
      screen: Info,
      navigationOptions : {
        tabBarLabel: 'Info',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={'beta'}
          />
        ),
      } 
    }
  },
  {}
);

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
