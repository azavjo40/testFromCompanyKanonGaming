import { ALLDATAGAMES } from "./types";
import { httpFetch } from "../hooks/httpFetch";
import { playGames } from "../../midlleware/fruitGames";

export const gamesPost = (form) => {
  return async (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/games/user",
        requestOptions
      );
      const data = await response.json();
      dispatch({ type: ALLDATAGAMES, payload: data });
    } catch (e) {
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
    try {
      const { data } = await dispatch(
        httpFetch("http://localhost:5000/api/games/patch", "PATCH", storage)
      );
      dispatch({ type: ALLDATAGAMES, payload: data });
    } catch (e) {
      const { fruits, moneys, _id, name } = playGames(storage);
      const dataOfline = { fruits, moneys, _id, name };
      dispatch({ type: ALLDATAGAMES, payload: dataOfline });
    }
  };
};
