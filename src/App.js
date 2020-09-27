import React from "react";
import "./App.css";
import ChoosePlayer from "./components/Pages/ChoosePlayer";
import Game from "./components/Pages/Game.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ChoosePlayer} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
