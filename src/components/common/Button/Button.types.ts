export interface IButton {
  children: JSX.Element | string;
  onClick: () => void;
  variant?: "filled" | "outlined";
}
