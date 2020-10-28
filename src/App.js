import React from 'react';
import Preloader from './components/preloader/preloader';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Game from './components/game/game';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Preloader />
        </Route>
        <Route exact path="/game">
          <Game/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
