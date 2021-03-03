//@ts-check
import { showAlert, isLoading } from "../general/generalActoins";

export function httpFetch(
  url,
  method = null,
  body = null,
  file = null,
  token = null,
  type = null
) {
  return async (dispach) => {
    try {
      dispach(isLoading(true));
      const requestOptions = {
        method: method,
        headers: { Authorization: token },
      };
      if ((method === "POST" && body) || (method === "PATCH" && body)) {
        requestOptions.body = JSON.stringify(body);
        requestOptions.headers = {
          "Content-Type": "application/json",
          Authorization: token,
        };
      }

      if (file) {
        requestOptions.body = file;
      }

      const response = await fetch(url, requestOptions);
      const data = await response.json();
      if (type && data) {
        dispach({ type: type, payload: data });
      }
      dispach(showAlert(data.message));
      dispach(isLoading(false));
      return { response, data };
    } catch (e) {
      dispach(showAlert("Something went wrong try again"));
    }
  };
}
