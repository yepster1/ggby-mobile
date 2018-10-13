import React from "react";
// import moment from "moment";
import { connect } from "react-redux";

import { selectEventReminder } from "domain/eventReminders";

import {
  scheduleEventReminder,
  cancelEventReminder
} from "epics/eventReminders";

import EventItemView from "./EventItemView";

class EventItemContainer extends React.PureComponent {
  onReminderIconPress = () => {
    const {
      event,
      eventReminder,
      cancelEventReminder,
      scheduleEventReminder
    } = this.props;

    return eventReminder
      ? cancelEventReminder(event)
      : scheduleEventReminder(event);
  };

  render() {
    const { event, eventReminder } = this.props;

    return (
      <EventItemView
        event={event}
        hasReminder={!!eventReminder}
        onReminderIconPress={this.onReminderIconPress}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  eventReminder: selectEventReminder(state, props.event.id)
});

const mapDispatchToProps = dispatch => ({
  scheduleEventReminder: event => dispatch(scheduleEventReminder(event)),
  cancelEventReminder: event => dispatch(cancelEventReminder(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventItemContainer);
