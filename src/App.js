import React, { Component, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { getCurrentUser } from "./redux/auth/auth-operation";
// import Home from "./components/Pages/Home";
// import Login from "./components/Pages/Login";
// import Register from "./components/Pages/Register";
// import Contacts from "./components/Pages/Contacts";
import AppBar from "./components/UserMenu/AppBar";
import "./App.css";

const Home = lazy(() =>
  import("./components/Pages/Home.js" /* webpackChunkName: "HomePage" */)
);

const Login = lazy(() =>
  import("./components/Pages/Login.js" /* webpackChunkName: "LoginPage" */)
);

const Register = lazy(() =>
  import(
    "./components/Pages/Register.js" /* webpackChunkName: "RegisterPage" */
  )
);

const Contacts = lazy(() =>
  import(
    "./components/Pages/Contacts.js" /* webpackChunkName: "ContactsPage" */
  )
);

class App extends Component {
  componentDidMount() {
    this.props.onRefresh();
  }

  render() {
    return (
      <Router>
        <div>
          <AppBar />

          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute
                path="/contacts"
                component={Contacts}
                redirectTo="/login"
              />
              <PublicRoute
                path="/register"
                restricted
                component={Register}
                redirectTo="/contacts"
              />
              <PublicRoute
                path="/login"
                restricted
                component={Login}
                redirectTo="/contacts"
              />
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  onRefresh: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
