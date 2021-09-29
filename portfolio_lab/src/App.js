import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/Log_in";
import Register from "./components/Register";
import Test from "./components/Test";


const App = () => {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/test" component={Test} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
