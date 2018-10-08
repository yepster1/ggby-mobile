import React from 'react';
import { Icon } from 'expo';

import * as v from "theme/variables";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.MaterialCommunityIcons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? v.TAB_ICON_SELECTED : v.TAB_ICON_DEFAULT}
      />
    );
  }
}