import { combineReducers } from "redux"
import nameReducer from "./name/nameReducer"
import nameReducer2 from "./name2/nameReducer2"

const rootReducer = combineReducers({
  nameReducer: nameReducer,
  nameReducer2: nameReducer2,
})

export default rootReducer
