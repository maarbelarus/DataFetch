import { SHOW_TOAST_MESSAGE, HIDE_TOAST_MESSAGE } from "actions/ToastMessage";
import { IToastMessageState, IToastMessageAction } from "./ToastMessage.types";

export const toastMessageInitialState: IToastMessageState = {
  isShown: false,
  type: "info",
  text: ""
};

export function toastMessageReducer(state = toastMessageInitialState, action: IToastMessageAction) {
  switch (action.type) {
    case SHOW_TOAST_MESSAGE: {
      return { ...state, isShown: true, type: action.payload.type, text: action.payload.text };
    }
    case HIDE_TOAST_MESSAGE: {
      return { ...state, isShown: false };
    }
    default:
      return state;
  }
}
