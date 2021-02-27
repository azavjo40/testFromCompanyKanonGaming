//@ts-check
import { ISLOADING } from "./types";
const initialState = {
  isLoading: false,
};

export const generalReducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case ISLOADING:
      return { ...state, isLoading: actoin.payload };
    default:
      return state;
  }
};
