import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import reducers from "./reducers";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App";
const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
