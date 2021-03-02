import { isLoading, showAlert } from "../general/generalActoins";
import { COUNTRY } from "./types";
export const getAllCountries = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      dispatch({ type: COUNTRY, payload: data });
      dispatch(isLoading(false));
    } catch (e) {
      dispatch(showAlert("Something went wrong try again"));
    }
  };
};
