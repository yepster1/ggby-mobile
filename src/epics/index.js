import { combineEpics, ofType } from "redux-observable";
import { map, tap } from "rxjs/operators";

const testEpic = action$ =>
  action$.pipe(
    ofType("INIT_APP"),
    tap(action => console.log(action)),
    map(action => ({ type: "foo" }))
  );

export default combineEpics(testEpic);
