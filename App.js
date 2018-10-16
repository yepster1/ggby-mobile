import React from "react";
import configureStore from "store/configureStore";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootNavigator from "features/rootNavigator";

const { store, persistor } = configureStore();

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{() => <RootNavigator />}</PersistGate>
  </Provider>
);
