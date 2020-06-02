import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import Scrubber from "./Scrubber";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/scrubber">
          <Scrubber />
        </Route>
      </Switch>
    </>
  );
}

export default App;
