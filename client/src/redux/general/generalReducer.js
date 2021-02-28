//@ts-check
import { SHOWALERT, ISLOADING } from "./types";
const initialState = {
  isLoading: false,
  alert: null,
};

export const generalReducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case ISLOADING:
      return { ...state, isLoading: actoin.payload };
    case SHOWALERT:
      return { ...state, alert: actoin.payload };
    default:
      return state;
  }
};
