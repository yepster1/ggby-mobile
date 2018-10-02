import { combineEpics, ofType } from "redux-observable";
import { createAction } from "redux-actions";
import { Permissions, Notifications } from "expo";
import { empty } from "rxjs/operators";
import { map, tap } from "rxjs/operators";
import moment from "moment";

import {
  saveEventReminder,
  removeEventReminder,
  selectEventReminder
} from "domain/eventReminders";

const scheduleEventReminder = createAction(
  "SCHEDULE_EVENT_REMINDER",
  event => event
);

const cancelEventReminder = createAction(
  "CANCEL_EVENT_REMINDER",
  event => event
);

const scheduleEventReminderEpic = action$ =>
  console.log("sdfasdasdf") ||
  action$.pipe(
    ofType(scheduleEventReminder.toString()),
    tap(action => console.log("scheduleEventReminder")),
    map(({ payload: event }) => {
      const notificationId = Notifications.presentLocalNotificationAsync(
        {
          title: "Test notification",
          body: "Test body",
          ios: { sound: true }
        },
        {
          time: moment()
            .add("5", "seconds")
            .valueOf() // unix timestamp in ms
        }
      );

      return saveEventReminder(event.id, notificationId);
    })
  );

const cancelEventReminderEpic = (action$, state$) =>
  action$.pipe(
    ofType(cancelEventReminder.toString()),
    tap(action => console.log("cancelEventReminder")),
    map(({ payload: event }) => {
      const eventReminder = selectEventReminder(state$.value, event.id);
      if (!eventReminder) return empty();

      Notifications.cancelScheduledNotificationAsync(
        eventReminder.notificationId
      );
      return removeEventReminder(event.id);
    })
  );

export default combineEpics(scheduleEventReminderEpic, cancelEventReminderEpic);

export { scheduleEventReminder, cancelEventReminder };
