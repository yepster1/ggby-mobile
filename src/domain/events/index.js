import { handleActions } from "redux-actions";
import bundledEvents from "../../../assets/json/events.json";

// REDUCER

const initalState = {
  entities: bundledEvents
};

const reducer = handleActions(
  {
    // TODO: Implement. In the future, we will need actions/reducers like
    // SET_EVENTS, UPDATE_EVENT, etc. For now, we are simply pulling in bundled
    // json data and setting as the inital state.
  },
  initalState
);

// SELECTORS

const selectEvents = state => state.events.entities;

// EXPORTS

export default reducer;

export { selectEvents };
