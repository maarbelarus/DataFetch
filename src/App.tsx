import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { UserListContainer } from "containers/UserListContainer/UserListContainer";
import { ToastMessage } from "components/common";

function App({ store }) {
  const history = createBrowserHistory(store);

  return (
    <div>
      <Router history={history}>
        <Route path="/" component={() => <UserListContainer />} />
      </Router>
      <ToastMessage />
    </div>
  );
}

export default App;
