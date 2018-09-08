import { createAction, handleActions } from 'redux-actions';

const initialState = { entities: [{ name: 'A cool event' }] };

// CREATE REDUCER

const reducer = handleActions(
  {
    // TODO: Implement
  },
  initialState,
);

// CREATE SELECTOR

const selectEvents = state => state.events.entities;

// EXPORTS

export default reducer;

export { selectEvents, initialState };
