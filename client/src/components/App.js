import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import {UserContext, UserProvider} from "/Users/elizabethclawson/Development/code/4/phase-4-deploying-demo-app/client/src/context/user.js";
import Home from "./Home";
import About from "./About.js";
import Header from "./Header.js";
import Notification from "./Notification.js";

function App() {
  // const {getCurrentUser, user} = useContext(UserContext)
  
  // useEffect(() => {
  //   if (!user){
  //     getCurrentUser()
  //   }
  // }, [user])

  // useEffect(() => {
  //   // auto-login
  //   fetch("/api/v1/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <Router>
        {/* <Notification/> */}
      </Router>
      <NavBar />

      <Header slogan="Share your short stories with the world!"/>
      <main>
        <Switch>
          <Route path="/about">
           <About /> 
          </Route>
          <Route path="/new">
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}



export default App;
