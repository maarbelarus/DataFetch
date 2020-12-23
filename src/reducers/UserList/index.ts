import { SET_USER_LIST_DATA } from "actions/UserList";

export const userListInitialState = {
  userList: []
};

export function userListReducer(state = userListInitialState, action) {
  switch (action.type) {
    case SET_USER_LIST_DATA: {
      return { ...state, userList: action.payload };
    }
    default:
      return state;
  }
}
