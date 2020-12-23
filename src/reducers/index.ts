import { routerReducer } from "react-router-redux";
import { userListReducer } from "reducers/UserList";
import { toastMessageReducer } from "reducers/ToastMessage";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  routing: routerReducer,
  userList: userListReducer,
  toastMessage: toastMessageReducer
});
