import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/signup";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"} component={Users}>
          </Route>
          {/* <Route exact path="/quiz/:id">

          </Route> */}
          <Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
