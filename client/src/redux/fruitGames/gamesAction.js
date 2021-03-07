import { ALLDATAGAMES } from "./types";
import { playGames } from "../../middleware/fruitGames";
import { httpFetch } from "../hooks/httpFetch.js";

export const gamesPost = (form) => {
  return async (dispatch) => {
    let result;
    try {
      let { response, data } = await dispatch(
        httpFetch("http://localhost:5000/api/games/user", "POST", form)
      );
      result = response;
      dispatch({ type: ALLDATAGAMES, payload: data });
    } catch (e) {}
    if (result === undefined) {
      const dataForm = { moneys: form.moneys, _id: null, name: form.name };
      const { fruits, moneys, _id, name } = playGames(dataForm);
      const dataOfline = { fruits, moneys, _id, name };
      dispatch({ type: ALLDATAGAMES, payload: dataOfline });
    }
  };
};

export const gamesPatch = (dataStorage) => {
  return async (dispatch) => {
    const storage = {
      moneys: dataStorage.moneys,
      _id: dataStorage._id,
      name: dataStorage.name,
    };
    let result;
    try {
      let { response, data } = await dispatch(
        httpFetch("http://localhost:5000/api/games/patch", "PATCH", storage)
      );
      result = response;
      dispatch({ type: ALLDATAGAMES, payload: data });
    } catch (e) {}
    if (result === undefined) {
      const { fruits, moneys, _id, name } = playGames(storage);
      const dataOfline = { fruits, moneys, _id, name };
      dispatch({ type: ALLDATAGAMES, payload: dataOfline });
    }
  };
};
