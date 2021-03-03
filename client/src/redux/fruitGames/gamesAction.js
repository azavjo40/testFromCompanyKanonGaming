import { ALLDATAGAMES } from "./types";
import { httpFetch } from "../hooks/httpFetch";

export const gamesPost = (form) => {
  return async (dispatch) => {
    try {
      const { response, data } = await dispatch(
        httpFetch(
          "http://localhost:5000/api/games/user",
          "POST",
          form,
          null,
          null,
          ALLDATAGAMES
        )
      );
      console.log("1", data);
    } catch (e) {
      console.log(e);
    }
  };
};

export const gamesPatch = (dataStorage) => {
  return async (dispatch) => {
    console.log();
    const storage = {
      name: dataStorage.name,
      _id: dataStorage.userId,
      moneys: dataStorage.moneys,
    };
    console.log(storage);
    try {
      const { response, data } = await dispatch(
        httpFetch("http://localhost:5000/api/games/patch", "PATCH", storage)
      );
      if (!response.ok) {
        console.log("problem");
      } else {
        dispatch({ type: ALLDATAGAMES, payload: data });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
