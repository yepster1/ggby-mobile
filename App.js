import React from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import RootNavigator from "./src/features/rootNavigator";
import configureStore from "./src/store/configureStore";

const { store, persistor } = configureStore();

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{() => <RootNavigator />}</PersistGate>
  </Provider>
);
