import { ALLDATAGAMES } from "./types";
import { playGames } from "../../midlleware/fruitGames";
import { isLoading } from "../general/generalActoins";
export const gamesPost = (form) => {
  return async (dispatch) => {
    let response;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };
    try {
      dispatch(isLoading(true));
      response = await fetch(
        "http://localhost:5000/api/games/user",
        requestOptions
      );
      const data = await response.json();
      dispatch({ type: ALLDATAGAMES, payload: data });
      dispatch(isLoading(false));
    } catch (e) {}
    if (response === undefined) {
      const dataForm = { moneys: form.moneys, _id: null, name: form.name };
      const { fruits, moneys, _id, name } = playGames(dataForm);
      const dataOfline = { fruits, moneys, _id, name };
      dispatch({ type: ALLDATAGAMES, payload: dataOfline });
    }
  };
};

export const gamesPatch = (dataStorage) => {
  return async (dispatch) => {
    let response;
    const storage = {
      moneys: dataStorage.moneys,
      _id: dataStorage._id,
      name: dataStorage.name,
    };
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(storage),
    };
    try {
      dispatch(isLoading(true));
      response = await fetch(
        "http://localhost:5000/api/games/patch",
        requestOptions
      );
      const data = await response.json();
      dispatch({ type: ALLDATAGAMES, payload: data });
      dispatch(isLoading(false));
    } catch (e) {}
    if (response === undefined) {
      const { fruits, moneys, _id, name } = playGames(storage);
      const dataOfline = { fruits, moneys, _id, name };
      dispatch({ type: ALLDATAGAMES, payload: dataOfline });
    }
  };
};
