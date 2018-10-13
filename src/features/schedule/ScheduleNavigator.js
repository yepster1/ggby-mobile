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
      screen: props => <ScheduleContainer filterBy="upcoming" {...props} />,
      navigationOptions: {
        title: "Upcoming"
      }
    },
    GoingEvents: {
      screen: props => <ScheduleContainer filterBy="going" {...props} />,
      navigationOptions: {
        title: "Going"
      }
    },
    PastEvents: {
      screen: props => <ScheduleContainer filterBy="past" {...props} />,
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
