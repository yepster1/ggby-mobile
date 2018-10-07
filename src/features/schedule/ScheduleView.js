import React from "react";
import moment from "moment";
import { groupBy, map, keys } from "ramda";

import { View, Text, SectionList } from "react-native";
import EventItemContainer from "./EventItemContainer";

import styles from "./ScheduleView.style";

const mockEventTimes = event => {
  let seedTime = moment();

  if (event.id % 2 === 0) {
    seedTime = seedTime.add(1, "day");
  }

  return {
    ...event,
    startAt: seedTime.add(event.id, "hour").format(),
    endAt: seedTime.add(event.id + 1, "hour").format()
  };
};

class ScheduleView extends React.PureComponent {
  keyExtractor = ({ id }) => id.toString();

  renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.secondaryText}>{title}</Text>
    </View>
  );

  renderEventItem = ({ item: event }) => <EventItemContainer event={event} />;

  // TODO: Performance was shit on iOS X but fine otherwise -- may need to have
  // someone else check as well to see if this is an issue that needs
  // addressing. Also need to test with production version.
  render() {
    const { events } = this.props;

    const groupByDate = ({ startAt }) =>
      moment(startAt).format("dddd, DD MMMM");

    const groupedEvents = groupBy(groupByDate, map(mockEventTimes, events));

    const sectionListData = map(
      title => ({
        title,
        key: title,
        data: map(item => ({ ...item }), groupedEvents[title])
      }),
      keys(groupedEvents)
    );

    return (
      <View style={styles.screen}>
        <SectionList
          sections={sectionListData}
          keyExtractor={this.keyExtractor}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderEventItem}
        />
      </View>
    );
  }
}

export default ScheduleView;
