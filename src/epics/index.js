import { combineEpics } from "redux-observable";
import eventRemindersEpic from "./eventReminders";

export default combineEpics(eventRemindersEpic);
