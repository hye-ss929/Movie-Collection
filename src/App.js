import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import styled from "styled-components";
import Collection from "./pages/Collection/Collection";

function App({ imageUpload, authService }) {
  return (
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/collection">
            <Collection imageUpload={imageUpload} authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
