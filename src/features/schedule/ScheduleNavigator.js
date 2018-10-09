import React from "react";

import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import defaultStackNavigatorConfigs from "components/navigator";
import * as v from "theme/variables";
import ScheduleContainer from "./ScheduleContainer";

import styles from "./ScheduleNavigator.style";

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
  {
    tabBarOptions: {
      style: styles.containerStyle,
      indicatorStyle: styles.indicatorStyle,
      labelStyle: styles.labelStyle,
      activeTintColor: v.ACCENT_COLOR,
      inactiveTintColor: v.WHITE,
      upperCaseLabel: false
    }
  }
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
