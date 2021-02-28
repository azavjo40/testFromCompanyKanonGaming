//@ts-check
import { combineReducers } from "redux";
import { generalReducer } from "./general/generalReducer";
import { counntriesReducer } from "./countries/countriesReducer";
export const roodReducer = combineReducers({
  general: generalReducer,
  country: counntriesReducer,
});
