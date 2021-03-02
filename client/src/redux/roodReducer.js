//@ts-check
import { combineReducers } from "redux";
import { generalReducer } from "./general/generalReducer";
import { counntriesReducer } from "./countries/countriesReducer";
import { gamesReducer } from "./fruitGames/gemesReduce";
export const roodReducer = combineReducers({
  general: generalReducer,
  country: counntriesReducer,
  games: gamesReducer,
});
