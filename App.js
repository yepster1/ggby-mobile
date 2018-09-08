import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'domain';
import { selectEvents } from 'domain/events';

const mapStateToProps = (state, props) => ({
  events: selectEvents(state)
});

const App = connect(mapStateToProps)(({ events }) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      <Text>Events: {JSON.stringify(events)}</Text>
    </View>
  );
});

const store = createStore(rootReducer);

export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
