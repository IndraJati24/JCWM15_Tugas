import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";

//import create store
import { createStore } from "redux";

//import provider
import { Provider } from "react-redux";

//import combined allReducers
import allReducers from "./reducer";

//make variable for create store
const globalState = createStore(allReducers);

//subscribe variable global state for console login
globalState.subscribe(() =>
  console.log("Global State: ", globalState.getState())
);

ReactDOM.render(
  <Provider store={globalState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
