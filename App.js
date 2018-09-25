import React from "react";
import configureStore from "store/configureStore";

import { Provider } from "react-redux";
import RootNavigator from "features/rootNavigator";

export default () => (
  <Provider store={configureStore()}>
    <RootNavigator />
  </Provider>
);
