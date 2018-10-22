import { handleActions } from "redux-actions";
import bundledMapFeatures from "../../../assets/json/MapFeatures.json";

// REDUCER

const initalState = {
  entities: bundledMapFeatures
};

const reducer = handleActions(
  {
    // TODO: Implement. In the future, we will need actions/reducers like
    // FOCUSED_FEATURE, SHOW_FEATURE_DETAILS, etc. For now, we are simply pulling in bundled
    // json data and setting as the inital state.
  },
  initalState
);


// EXPORTS

export default reducer;

