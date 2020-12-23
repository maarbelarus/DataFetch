export type toastMessageType = "info" | "success" | "error";

export interface IShowToastMessagePayload {
  type: toastMessageType;
  text: string | "";
}
