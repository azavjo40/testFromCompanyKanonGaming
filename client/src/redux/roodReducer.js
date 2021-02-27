//@ts-check
import { combineReducers } from "redux";
import { generalReducer } from "./general/generalReducer";
export const roodReducer = combineReducers({ general: generalReducer });
