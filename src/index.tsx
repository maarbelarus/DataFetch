import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { axiosConfig } from "utils/axiosConfig";
import { rootReducer } from "./reducers";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));

axiosConfig(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
