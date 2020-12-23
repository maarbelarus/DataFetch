import axios from "axios";
import { showToastMessage } from "../actions/ToastMessage";

export const BASE_URL = "http://jsonplaceholder.typicode.com";

export function axiosConfig(dispatch) {
  axios.defaults.baseURL = BASE_URL;
  axios.interceptors.response.use(
    response => response,
    error => {
      const status = error.status || error.response?.status;

      let errText = "Something went wrong";
      if (status >= 500) {
        errText += " on server side";
      } else if (status === 404) {
        errText += " on the client side";
      }
      dispatch(showToastMessage({ type: "error", text: errText }));
    }
  );
}
