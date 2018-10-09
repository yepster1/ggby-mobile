import React from "react";

import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import defaultStackNavigatorConfigs from "components/navigator";
import ScheduleContainer from "./ScheduleContainer";

const ScheduleTabs = createMaterialTopTabNavigator(
  {
    UpcomingEvents: {
      screen: props => <ScheduleContainer {...props} />,
      navigationOptions: {
        title: "Upcoming"
      }
    },
    GoingEvents: {
      screen: props => <ScheduleContainer {...props} />,
      navigationOptions: {
        title: "Going"
      }
    },
    PastEvents: {
      screen: props => <ScheduleContainer {...props} />,
      navigationOptions: {
        title: "Past"
      }
    }
  },
  {}
);

const ScheduleNavigator = createStackNavigator(
  {
    ScheduleTabs: {
      screen: ScheduleTabs
    }
  },
  defaultStackNavigatorConfigs
);

export default ScheduleNavigator;
