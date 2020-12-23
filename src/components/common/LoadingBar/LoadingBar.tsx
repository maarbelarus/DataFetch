import React from "react";
import clsx from "clsx";
import loading from "assets/loading.gif";
import { ILoadingBar } from "./LoadingBar.types";

export function LoadingBar({ isFullScreen = false }: ILoadingBar) {
  return (
    <div className={clsx("common-loading-bar-component", isFullScreen && "full-screen")}>
      <img src={loading} alt="loading..." />
    </div>
  );
}
