import { combineReducers } from "redux";

import events from "./events";
import eventReminders from "./eventReminders";

const rootReducer = combineReducers({
  events,
  eventReminders
});

export default rootReducer;
