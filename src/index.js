import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import AuthService from "./service/auth_service";
import ImageUpload from "./service/ImageUpload";
import MoviesDatabase from "./service/MovisDatabase";

const authService = new AuthService();
const imageUpload = new ImageUpload();
const moviesDatabase = new MoviesDatabase();
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App
        authService={authService}
        imageUpload={imageUpload}
        moviesDatabase={moviesDatabase}
      />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
