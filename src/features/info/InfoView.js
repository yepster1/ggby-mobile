import React from "react";

import { View, Text } from "react-native";

import styles from "./InfoView.style";

class InfoView extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.contentContainer}>
          <Text style={styles.primaryHeading}>First Timers</Text>
          <Text style={styles.primaryHeading}>Logistics & Essentials</Text>
          <Text style={styles.primaryHeading}>Spirit & Values</Text>
          <Text style={styles.primaryHeading}>Getting to the Fruit Bowl</Text>
          <Text style={styles.primaryHeading}>Town History</Text>
          <Text style={styles.primaryHeading}>History</Text>
        </View>
      </View>
    );
  }
}

export default InfoView;
