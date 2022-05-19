import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header.js";
import NavBar from "./NavBar";
import {UserContext} from "./context/user.js";
import About from "./About.js";
import Notification from "./Notification.js";
import Login from "./Login.js";
import Logout from "./Logout";
import Profile from "./Profile";

function App() {
  const {getCurrentUser, user} = useContext(UserContext)
  
  useEffect(() => {
      if (!user) {
        getCurrentUser()
      }
  }, [])

  return (
    <div className="App">
      <Router>
        <Notification/>
        <NavBar />
        <Header slogan="Share your short stories with the world!"/>
          <Switch>
            <Route path="/about">
              <About /> 
            </Route>
            <Route path="/login">
             <Login /> 
            </Route>
            <Route path="/logout">
              <Logout /> 
            </Route>
            <Route path="/profile">
              <Profile /> 
            </Route>
            <Route path="/new">
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}



export default App;
