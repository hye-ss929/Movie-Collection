import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import AuthService from "./service/auth_service";

const authService = new AuthService();
ReactDOM.render(
  <>
    <GlobalStyles />
    <App authService={authService} />
  </>,
  document.getElementById("root")
);
