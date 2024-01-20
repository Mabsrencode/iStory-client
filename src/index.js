import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import reducers from "./reducers";
import { ThemeProvider } from "@material-tailwind/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);
const root = ReactDOM.createRoot(document.getElementById("root"));
const accessToken = process.env.REACT_APP_GOOGLE_ID_ACCESS_TOKEN;
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={accessToken}>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
