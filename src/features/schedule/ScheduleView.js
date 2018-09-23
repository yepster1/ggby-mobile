import React from "react";
import moment from "moment";
import { groupBy, map, keys } from "ramda";

import { View, Text, SectionList } from "react-native";

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

class ScheduleView extends React.Component {
  keyExtractor = ({ id }) => id;

  renderSectionHeader = ({ section: { title } }) => <Text>{title}</Text>;

  renderEventItem = ({ item }) => <Text>{item.name}</Text>;

  render() {
    const { events } = this.props;

    const groupByDate = ({ startAt }) =>
      moment(startAt).format("dddd, DD MMMM");

    const groupedEvents = groupBy(groupByDate, map(mockEventTimes, events));

    const sectionListData = map(
      title => ({ title, data: groupedEvents[title] }),
      keys(groupedEvents)
    );

    return (
      <View>
        <Text>Schedule test</Text>

        <SectionList
          keyExtractor={this.keyExtractor}
          sections={sectionListData}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderEventItem}
        />
      </View>
    );
  }
}

export default ScheduleView;
