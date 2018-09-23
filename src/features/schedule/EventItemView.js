import React from "react";
import moment from "moment";

import { View, Text } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";

import styles from "./EventItemView.style";

export default class EventItemView extends React.Component {
  state = {
    hasReminder: false
  };

  onReminderIconPress = () => {
    const { hasReminder } = this.state;
    this.setState({ hasReminder: !hasReminder });
  };

  render() {
    const { event } = this.props;
    const { name, startAt, endAt } = event;
    const { hasReminder } = this.state;

    return (
      <View style={styles.eventItemContainer}>
        <View style={styles.leftEventItemSection}>
          <Text style={styles.normalText}>
            {moment(startAt).format("h:mm a")}
          </Text>

          <Text style={styles.secondaryText}>
            {moment(endAt).format("h:mm a")}
          </Text>
        </View>

        <View style={styles.centerEventItemSection}>
          <Text style={styles.eventTitleText}>{name}</Text>
          <Text style={styles.secondaryText}>
            This is a full, longer description about why the event is so cool.
          </Text>
        </View>

        <View style={styles.rightEventItemSection}>
          <Icon
            onPress={this.onReminderIconPress}
            style={[
              styles.reminderIcon,
              hasReminder && styles.activeReminderIcon
            ]}
            name={`ios-alarm${hasReminder ? "" : "-outline"}`}
          />
        </View>
      </View>
    );
  }
}
