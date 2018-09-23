import React from "react";
import { connect } from "react-redux";

import { selectEvents } from "domain/events";
import ScheduleView from "./ScheduleView";

class ScheduleContainer extends React.Component {
  onEventPress = event => {
    const { navigation } = this.props;
    navigation.navigate("EventDetails", { id: event.id });
  };

  render() {
    const { events } = this.props;
    return <ScheduleView events={events} onEventPress={this.onEventPress} />;
  }
}

const mapStateToProps = state => ({
  events: selectEvents(state)
});

export default connect(mapStateToProps)(ScheduleContainer);
