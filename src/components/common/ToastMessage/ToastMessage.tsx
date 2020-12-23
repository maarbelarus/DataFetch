import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { hideToastMessage } from "actions/ToastMessage";

export function ToastMessage() {
  const toastMessageState = useSelector(state => state.toastMessage);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(hideToastMessage());
  };

  const setToastTitle = () => {
    switch (toastMessageState.type) {
      case "error":
        return "Error occurred.";
      case "success":
        return "Success!";
      case "info":
        return "Information";
      default:
        return "";
    }
  };

  return (
    <div
      className={clsx(
        "common-toast-message-component",
        `toast-${toastMessageState.type}`,
        toastMessageState.isShown && "visible"
      )}
    >
      <h3 className="title">
        {setToastTitle()}
        <span
          aria-label="Close"
          role="button"
          className="close"
          onClick={handleOnClick}
          onKeyDown={() => {
            return null;
          }}
          tabIndex={0}
        />
      </h3>
      <div className="text">{toastMessageState.text}</div>
    </div>
  );
}
