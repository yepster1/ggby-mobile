import { handleActions } from "redux-actions";
import bundledEvents from "json/events.json";

// REDUCER

const reducer = handleActions(
  {
    // TODO: Implement. In the future, we will need actions/reducers like
    // SET_EVENTS, UPDATE_EVENT, etc. For now, we are simply pulling in bundled
    // json data and setting as the inital state.
  },
  bundledEvents
);

// SELECTORS

const selectEvents = state => state.events.entities;

// EXPORTS

export default reducer;

export { selectEvents };
