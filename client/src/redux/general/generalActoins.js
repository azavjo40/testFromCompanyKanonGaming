//@ts-check
import { ISLOADING } from "./types";
export const isLoading = (bool) => ({ type: ISLOADING, payload: bool });
