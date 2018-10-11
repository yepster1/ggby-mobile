import React from "react";

import { createBottomTabNavigator } from "react-navigation";

import Schedule from "features/schedule";
import Map from "features/map";
import Info from "features/info";

import TabBarIcon from "components/icons";
import * as v from "theme/variables";

// NOTE: If the RootNavigator get any more complex (i.e.  accounts/registration
// features) we'll probably want to move this into its own feature dir. For
// now, the RootNavigator below is pretty much just providing a header.

const RootNavigator = createBottomTabNavigator(
  {
    Schedule: {
      screen: Schedule,
      navigationOptions: {
        tabBarLabel: "Schedule",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="calendar" />
        )
      }
    },
    Map: {
      screen: Map,
      navigationOptions: {
        tabBarLabel: "Map",
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="map" />
      }
    },
    Info: {
      screen: Info,
      navigationOptions: {
        tabBarLabel: "Beta",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="beta" />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: v.DARK_BACKGROUND_COLOR,
        alignItems: "flex-end"
      },
      inactiveTintColor: v.WHITE,
      activeTintColor: v.ACCENT_COLOR
    }
  }
);

export default RootNavigator;
