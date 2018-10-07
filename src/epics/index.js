import { combineEpics } from "redux-observable";
import eventRemindersEpic from "epics/eventReminders";

export default combineEpics(eventRemindersEpic);
