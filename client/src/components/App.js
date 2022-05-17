import React, { useEffect, useContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import { UserContext } from "../context/user.js";
import Home from "./Home";
import About from "./About.js";

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
    <>
      <NavBar />
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
    </>
  );
}

export default App;
