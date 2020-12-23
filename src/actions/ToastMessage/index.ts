import { IShowToastMessagePayload } from "./ToastMessage.types";

export const SHOW_TOAST_MESSAGE = "SHOW_TOAST_MESSAGE";
export const HIDE_TOAST_MESSAGE = "HIDE_TOAST_MESSAGE";

export function showToastMessage(payload: IShowToastMessagePayload) {
  return {
    type: SHOW_TOAST_MESSAGE,
    payload
  };
}

export function hideToastMessage() {
  return {
    type: HIDE_TOAST_MESSAGE
  };
}
