import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Mail from "./Mail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/mail">
            <Mail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
