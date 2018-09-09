import React from 'react';
import { reduce } from 'ramda';

import { View, Text } from 'react-native';
import { SafeAreaView, createMaterialTopTabNavigator } from 'react-navigation';
import { Constants } from 'expo';

const InfoScreen = (props) => {
  return (
    <View>
      <Text>
        This is the info screen. Trying something here.
      </Text>
    </View>
  )
};

const tabs = [
  {
    routeName: 'Part 1',
    route: {
      screen: InfoScreen,
    }
  },
  {
    routeName: 'Part 2',
    route: {
      screen: InfoScreen,
    }
  },
  {
    routeName: 'Part 3',
    route: {
      screen: InfoScreen,
    }
  },
  {
    routeName: 'Part 4',
    route: {
      screen: InfoScreen,
    }
  },
  {
    routeName: 'Part 5',
    route: {
      screen: InfoScreen,
    }
  },
  {
    routeName: 'Part 6',
    route: {
      screen: InfoScreen,
    }
  },
];

const InfoTab = () => {
  const routes = reduce((acc, item) => ({ ...acc, [item.routeName]: item.route }), {}, tabs);
  const Tabs =  createMaterialTopTabNavigator(routes, {
    tabBarOptions: {
      scrollEnabled: true,
      tabStyle: {
        marginTop: Constants.statusBarHeight
      }
    }
  });
  return <Tabs />;
};

export default InfoTab;
