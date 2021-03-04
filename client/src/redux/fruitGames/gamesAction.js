import { ALLDATAGAMES } from "./types";
import { httpFetch } from "../hooks/httpFetch";
import { playGames } from "../../midlleware/fruitGames";
export const gamesPost = (form) => {
  return async (dispatch) => {
    try {
      await dispatch(
        httpFetch(
          "http://localhost:5000/api/games/user",
          "POST",
          form,
          null,
          null,
          ALLDATAGAMES
        )
      );
    } catch (e) {
      console.log(e);
    }
  };
};

export const gamesPatch = (dataStorage) => {
  return async (dispatch) => {
    const storage = {
      name: dataStorage.name,
      _id: dataStorage._id,
      moneys: dataStorage.moneys,
    };
    try {
      const { response, data } = await dispatch(
        httpFetch("http://localhost:5000/api/games/patch", "PATCH", storage)
      );
      if (!response) {
        const { fruits, moneys, _id, name } = playGames({
          moneys: storage.moneys,
          _id: storage._id,
          name: storage.name,
        });
        const dataOfline = { fruits, moneys, _id, name };
        dispatch({ type: ALLDATAGAMES, payload: dataOfline });
      } else {
        dispatch({ type: ALLDATAGAMES, payload: data });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
