import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import styled from "styled-components";

function App({ authService }) {
  return (
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <Route
            exct
            paht="/"
            render={() => <Login authService={authService} />}
          />
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
