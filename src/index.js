import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import AuthService from "./service/auth_service";
import ImageUpload from "./service/ImageUpload";
import MoviesDatabase from "./service/MovisDatabase";

const authService = new AuthService();
const imageUpload = new ImageUpload();
const moviesDatabase = new MoviesDatabase();
ReactDOM.render(
  <>
    <GlobalStyles />
    <App
      authService={authService}
      imageUpload={imageUpload}
      moviesDatabase={moviesDatabase}
    />
  </>,
  document.getElementById("root")
);
