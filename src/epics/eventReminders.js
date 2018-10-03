import { combineEpics, ofType } from "redux-observable";
import { createAction } from "redux-actions";
import { Permissions, Notifications } from "expo";
import { empty, from, of } from "rxjs";
import { mergeMap, map, tap } from "rxjs/operators";
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
  action$.pipe(
    ofType(scheduleEventReminder.toString()),
    mergeMap(({ payload: event }) => {
      const test = from(Permissions.getAsync(Permissions.NOTIFICATIONS)).pipe(
        mergeMap(permission => {
          const { status } = permission;
          return status !== "granted"
            ? from(Permissions.askAsync(Permissions.NOTIFICATIONS))
            : of(permission);
        }),
        mergeMap(permission =>
          from(
            Notifications.scheduleLocalNotificationAsync(
              {
                title: "Test notification",
                body: "Test body",
                ios: { sound: true }
              },
              {
                time: moment()
                  .add("20", "seconds")
                  .valueOf() // unix timestamp in ms
              }
            )
          )
        ),
        map(notificationId => saveEventReminder(event.id, notificationId))
      );

      return test;
    })
  );

const cancelEventReminderEpic = (action$, state$) =>
  action$.pipe(
    ofType(cancelEventReminder.toString()),
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
