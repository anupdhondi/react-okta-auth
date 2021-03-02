import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Login from "./components/auth/Login";
import { oktaAuthConfig, oktaSignInConfig } from "./config";

const oktaAuth = new OktaAuth(oktaAuthConfig);

function App() {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/login");
  };

  return (
    <div className="container main-container">
      <BrowserRouter>
        <Navbar />
        <Security oktaAuth={oktaAuth} onAuthRequired={customAuthHandler}>
          <Switch>
            <Route path="/login">
              <Login config={oktaSignInConfig} />
            </Route>
            <SecureRoute path="/staff" component={Staff} />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login/callback" component={LoginCallback} />
          </Switch>
        </Security>
      </BrowserRouter>
    </div>
  );
}

export default App;
