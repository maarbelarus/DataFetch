import axios from "axios";

export const SET_USER_LIST_DATA = "SET_USER_LIST_DATA";

export function getUserList(dispatch) {
  return axios.get("/users").then(result => {
    if (result) {
      dispatch({
        type: SET_USER_LIST_DATA,
        payload: result.data
      });
    }
  });
}
