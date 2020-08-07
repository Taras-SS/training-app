import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.module.css";
import Header from "./components/Header/Header";
import Admin from "./pages/Admin/Admin";
import "semantic-ui-css/semantic.min.css";
import SignIn from "./pages/SignIn/SignIn";
import MainPage from "./pages/MainPage/MainPage";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/signIn" component={SignIn} />
              <Route path="/admin" component={Admin} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
