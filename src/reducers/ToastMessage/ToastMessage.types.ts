import { toastMessageType } from "actions/ToastMessage/ToastMessage.types";

interface IToastMessageActionPayload {
  type: toastMessageType;
  text: string | "";
}

export interface IToastMessageState {
  isShown: boolean;
  type: toastMessageType;
  text: string | "";
}

export interface IToastMessageAction {
  type: string;
  payload: IToastMessageActionPayload;
}
