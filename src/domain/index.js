import { combineReducers } from "redux";

import events from "./events";
import eventReminders from "./eventReminders";
import mapFeatures from "./mapFeatures";

const rootReducer = combineReducers({
  events,
  eventReminders,
  mapFeatures
});

export default rootReducer;
