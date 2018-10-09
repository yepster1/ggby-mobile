import React from "react";

import { View, Image } from "react-native";

import * as v from "theme/variables";

export default {
  headerLayoutPreset: "left",
  navigationOptions: {
    headerStyle: {
      backgroundColor: v.DARK_BACKGROUND_COLOR
    },
    headerTitle: () => (
      <Image
        style={{
          marginHorizontal: v.BASE_VALUE,
          width: 100,
          height: 25,
          resizeMode: "contain"
        }}
        source={require("images/ggby-name.png")}
      />
    ),
    headerLeft: () => (
      <Image
        style={{
          marginHorizontal: v.BASE_VALUE,
          width: 30,
          height: 30,
          resizeMode: "contain"
        }}
        source={require("images/ggby-logo.png")}
      />
    )
  }
};
