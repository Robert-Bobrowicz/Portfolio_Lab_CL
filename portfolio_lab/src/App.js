import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";


const App = () => {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/test" component={Test} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
