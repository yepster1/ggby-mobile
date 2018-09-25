import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "domain";
import rootEpic from "epics";

const epicMiddleware = createEpicMiddleware();
// eslint-disable-next-line no-underscore-dangle
const composeDevtool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeDevtool(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);
  store.dispatch({ type: "INIT_APP" });

  return store;
}
