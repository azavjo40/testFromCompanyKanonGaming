import { ALLDATAGAMES } from "./types";

//@ts-check
const initialState = {
  allDataGames: null,
};

export const gamesReducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case ALLDATAGAMES:
      return { ...state, allDataGames: actoin.payload };
    default:
      return state;
  }
};
