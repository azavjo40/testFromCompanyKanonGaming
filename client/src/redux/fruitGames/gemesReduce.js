import { FRUITFRUITS, FRUITMONEYS, FRUITUSERID } from "./types";

//@ts-check
const initialState = {
  moneys: null,
  fruits: null,
  userId: null,
};

export const gamesReducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case FRUITMONEYS:
      return { ...state, moneys: actoin.payload };
    case FRUITFRUITS:
      return { ...state, fruits: actoin.payload };
    case FRUITUSERID:
      return { ...state, userId: actoin.payload };
    default:
      return state;
  }
};
