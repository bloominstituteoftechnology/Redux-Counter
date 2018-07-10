import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import friendsReducer from "./friendsReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  friend: friendsReducer
});

export default rootReducer;
