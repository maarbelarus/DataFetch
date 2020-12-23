import React, { useState } from "react";
import clsx from "clsx";

export function ListItem({ children }) {
  const [isDetailsExpanded, setIsDetailsExpanded] = useState<boolean>(false);

  const onClickHandle = () => {
    setIsDetailsExpanded(!isDetailsExpanded);
  };

  return (
    <div
      onKeyDown={() => {
        return null;
      }}
      tabIndex={0}
      className={clsx("common-list-item-component", isDetailsExpanded && "details-expanded")}
      aria-label="list-item"
      role="button"
      onClick={onClickHandle}
    >
      {children}
    </div>
  );
}
