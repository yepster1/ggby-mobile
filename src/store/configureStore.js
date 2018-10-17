import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "../domain";
import rootEpic from "../epics";

const epicMiddleware = createEpicMiddleware();
// eslint-disable-next-line no-underscore-dangle
const composeDevtool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["eventReminders"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(
    persistedReducer,
    composeDevtool(applyMiddleware(epicMiddleware))
  );

  const persistor = persistStore(store);

  epicMiddleware.run(rootEpic);
  store.dispatch({ type: "INIT_APP" });

  return { store, persistor };
}
