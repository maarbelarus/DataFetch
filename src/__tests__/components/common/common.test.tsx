import React from "react";
import { SHOW_TOAST_MESSAGE, HIDE_TOAST_MESSAGE, hideToastMessage } from "actions/ToastMessage";
import { toastMessageType } from "actions/ToastMessage/ToastMessage.types";
import { render, screen, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { rootReducer } from "reducers";
import { Provider } from "react-redux";
import { Button, ListItem, ListItemDetails, ToastMessage } from "components/common";

const toastActions = {
  hideToastMessage
};

describe("Common components.", () => {
  it("renders/checks Button component", () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Button onClick={onClickMock} variant="outlined">
        label
      </Button>
    );
    expect(container.querySelector(".common-button-component.outlined")).toBeInTheDocument();
    expect(onClickMock).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText("label"));
    expect(onClickMock).toHaveBeenCalled();
  });

  it("renders/checks ListItem component", () => {
    const { container } = render(
      <ListItem>
        Title
        <ListItemDetails>Details</ListItemDetails>
      </ListItem>
    );
    expect(container.querySelector(".common-list-item-component")).toBeInTheDocument();
    expect(container.querySelector(".common-list-item-component.details-expanded")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Title"));
    expect(container.querySelector(".common-list-item-component.details-expanded")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Title"));
    expect(container.querySelector(".common-list-item-component.details-expanded")).not.toBeInTheDocument();
  });

  it("renders/checks ToastMessage component", () => {
    const hideToastMessageSpy = jest.spyOn(toastActions, "hideToastMessage");
    const mockStore = createStore(rootReducer);
    const { container } = render(
      <Provider store={mockStore}>
        <ToastMessage />
      </Provider>
    );
    let toastType = "success" as toastMessageType;

    mockStore.dispatch({ type: SHOW_TOAST_MESSAGE, payload: { type: toastType, text: "First test" } });
    expect(container.querySelector(".common-toast-message-component.toast-success")).toBeInTheDocument();
    expect(screen.getByText("First test")).toBeInTheDocument();

    mockStore.dispatch({
      type: "SHOW_TOAST_MESSAGE_WRONG_TYPE",
      payload: { type: "testWrong", text: "Second test" }
    });
    // checks not existed type of toast
    expect(screen.queryByText("Second test")).toBeNull();

    toastType = "error";
    mockStore.dispatch({
      type: SHOW_TOAST_MESSAGE,
      payload: { type: toastType, text: "Third test" }
    });
    expect(screen.queryByText("Third test")).not.toBeNull();

    expect(container.querySelector(".common-toast-message-component.visible")).toBeInTheDocument();
    expect(hideToastMessageSpy).toBeCalledTimes(0);
    mockStore.dispatch({
      type: HIDE_TOAST_MESSAGE
    });
    expect(container.querySelector(".common-toast-message-component.visible")).not.toBeInTheDocument();
  });
});
