import React from "react";
import LanguageSelector from "../componenets/LanguageSelector";
import UserSignupPage from "../pages/UserSignupPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import TopBar from "../componenets/TopBar";
import { useSelector } from "react-redux";

const App = () => {
  const { isLoggedIn } = useSelector((store) => ({
    isLoggedIn: store.isLoggedIn,
  }));

  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {!isLoggedIn && <Route path="/login" component={LoginPage} />}
          <Route path="/signup" component={UserSignupPage} />
          <Route path="/user/:username" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <LanguageSelector />
    </div>
  );
};

export default App;