//@ts-check
import { ISLOADING, SHOWALERT } from "./types";
export const isLoading = (bool) => ({ type: ISLOADING, payload: bool });
export function showAlert(text) {
  return (dispach) => {
    dispach({
      type: SHOWALERT,
      payload: text,
    });
    setTimeout(() => {
      dispach({
        type: SHOWALERT,
        payload: null,
      });
    }, 3000);
  };
}
