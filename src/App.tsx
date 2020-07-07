import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.module.css";
import Header from "./components/Header/Header";
import Admin from "./pages/Admin/Admin";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
