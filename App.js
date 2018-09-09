// @flow
import React from "react";
import { createStore } from "redux";
import rootReducer from "domain";

import { Provider } from "react-redux";
import RootNavigator from "features/rootNavigator";

const store = createStore(rootReducer);

export default () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);
