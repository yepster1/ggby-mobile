import React from "react";

import { View, Text } from "react-native";

export default ({ navigation }) => {
  const event = navigation.getParam("event");

  return (
    <View>
      <Text>{event.name}</Text>
    </View>
  );
};
