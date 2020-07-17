import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Users from "./ui/Users";
import Profile from "./ui/Profile";

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Users} />
        <Route path='/profile/:slug' component={Profile} />
      </Switch>
    </div>
  );
};

export default App;
