import React from 'react';
import { createStore } from 'redux';
import rootReducer from 'domain';

import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import RootNavigator from 'features/rootNavigator';

const store = createStore(rootReducer);

export default () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);
