import React from "react";
import clsx from "clsx";

export function ListItemDetails({ children, className = "" }) {
  return <div className={clsx("common-list-item-details-component", className)}>{children}</div>;
}
