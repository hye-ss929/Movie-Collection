import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import styled from "styled-components";

function App() {
  return (
    <AppBox>
      <BrowserRouter>
        <Switch>
          <Route exct paht="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </AppBox>
  );
}

export default App;

const AppBox = styled.div``;
