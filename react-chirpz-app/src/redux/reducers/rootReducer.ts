import { combineReducers } from "redux";

import chirpzListActionReducer from "./chirpzListReducer";

const rootReducer = combineReducers({
  
  assetNotification: chirpzListActionReducer,
  
});

export default rootReducer;