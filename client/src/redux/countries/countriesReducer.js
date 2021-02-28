//@ts-check
import { COUNTRY } from "./types";
const initialState = {
  items: null,
};

export const counntriesReducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case COUNTRY:
      return { ...state, items: actoin.payload };
    default:
      return state;
  }
};
