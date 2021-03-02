import { isLoading } from "../general/generalActoins";
import { ALLDATAGAMES } from "./types";
import { httpFetch } from "../hooks/httpFetch";
export const gamesPost = (form) => {
  console.log(form);
  const requestOptions = {
    mode: "no-cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: form,
  };
  return async (dispatch) => {
    try {
      // dispatch(isLoading(true));
      // const response = await fetch(
      //   "http://localhost:5000/api/games/user",
      //   requestOptions
      // );
      // const data = await response.json();
      // console.log(data);
      // dispatch({ type: ALLDATAGAMES, payload: data });
      // dispatch(isLoading(false));
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
