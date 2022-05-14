import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import {UserContext} from ".context/user";

function App() {
  const {getCurrentUser, user} = useContext(UserContext)
  

  useEffect(() => {
    // auto-login
    fetch("/api/v1/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/">
            <RecipeList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
