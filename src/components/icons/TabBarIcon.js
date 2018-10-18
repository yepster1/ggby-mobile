import React from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import * as v from "../../theme/variables";

export default class TabBarIcon extends React.Component {
  render() {
    const { name, focused } = this.props;

    return (
      <Icon
        name={name}
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? v.TAB_ICON_SELECTED : v.TAB_ICON_DEFAULT}
      />
    );
  }
}
