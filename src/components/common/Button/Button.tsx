import React from "react";
import clsx from "clsx";
import { IButton } from "./Button.types";

export function Button({ children, onClick, variant = "filled" }: IButton) {
  return (
    <button type="button" className={clsx("common-button-component", variant)} tabIndex={0} onClick={onClick}>
      {children}
    </button>
  );
}
