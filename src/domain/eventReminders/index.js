import { createAction, handleActions } from "redux-actions";
import { set, lensPath, lensProp, omit } from "ramda";

// ACTIONS

const saveEventReminder = createAction(
  "SAVE_EVENT_REMINDER",
  (eventId, notificationId) => ({ eventId, notificationId })
);

const removeEventReminder = createAction("REMOVE_EVENT_REMINDER", eventId => ({
  eventId
}));

// REDUCER

const initalState = {
  entities: {}
};

const reducer = handleActions(
  {
    [saveEventReminder.toString()]: (
      state,
      { payload: { eventId, notificationId } }
    ) =>
      set(lensPath(["entities", eventId]), { eventId, notificationId }, state),

    [removeEventReminder.toString()]: (state, { payload: { eventId } }) =>
      set(lensProp("entities"), omit([eventId], state.entities), state)
  },
  initalState
);

// SELECTORS

const selectIndexedEventReminders = state => state.eventReminders.entities;

const selectEventReminder = (state, eventId) =>
  selectIndexedEventReminders(state)[eventId];

// EXPORTS

export default reducer;

export {
  saveEventReminder,
  removeEventReminder,
  selectIndexedEventReminders,
  selectEventReminder
};
