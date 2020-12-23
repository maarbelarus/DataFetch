import React from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { UserListContainer } from "containers/UserListContainer/UserListContainer";
import { createStore } from "redux";
import { BASE_URL } from "utils/axiosConfig";
import { rootReducer } from "reducers";
import { getUserList } from "actions/UserList";

const axiosMock = new MockAdapter(axios);
const mockStore = createStore(rootReducer);
const useListActions = {
  getUserList
};
const mockUserData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771"
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  }
];
let container;

describe("UserListContainer.", () => {
  beforeAll(() => {
    container = render(
      <Provider store={mockStore}>
        <UserListContainer />
      </Provider>
    ).container;
    waitFor(() => {
      expect(screen.getByTitle("List of users")).toBeInTheDocument();
    });
  });

  it("check container rendering", () => {
    const getUserListSpy = jest.spyOn(useListActions, "getUserList");
    const mockUser1Address = `${mockUserData[0].address.zipcode} ${mockUserData[0].address.city}, ${mockUserData[0].address.street}, ${mockUserData[0].address.suite}`;
    axiosMock.onGet(`${BASE_URL}/users`).reply(200, mockUserData);
    expect(screen.getByText("Refresh data")).toBeInTheDocument();
    waitFor(() => {
      expect(screen.getByTitle("List of users")).toBeInTheDocument();
    }).then(() => {
      expect(container.querySelectorAll(".common-list-item-component")).toHaveLength(2);
      expect(screen.getByText(mockUser1Address)).toBeInTheDocument();
      expect(getUserListSpy).toBeCalledTimes(1);
    });

    // check container without data
    axiosMock.onGet(`${BASE_URL}/users`).reply(404);
    fireEvent.click(screen.getByText("Refresh data"));
    waitFor(() => {
      expect(screen.getByTitle("List of users")).toBeInTheDocument();
    }).then(() => {
      expect(screen.getByText("No data found")).toBeInTheDocument();
      expect(container.querySelectorAll(".common-list-item-component")).toHaveLength(0);
      expect(getUserListSpy).toBeCalledTimes(2);
    });
  });
});
