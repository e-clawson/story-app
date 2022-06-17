import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header.js";
import NavBar from "./NavBar";
import {UserContext} from "../context/user";
import About from "./About.js";
import Notification from "./Notification.js";
import Login from "./User/Login.js";
import Logout from "./User/Logout";
import Profile from "./User/Profile";
// import PromptContainer from "../containers/PromptContainer";
// import PromptCard from "./Prompts/PromptCard";
// import { MessageContext } from "../context/message";
// import Signup2 from "./User/Signup2";
import SignUpForm from "./User/SignUpForm";
import PromptForm from "./Prompts/PromptForm";
import StoryForm from "./Stories/StoryForm";
import DeleteUser from "./User/DeleteUser";
import PromptCard2 from "./Prompts/PromptCard2";
import PromptCard from "./Prompts/PromptCard";
import StoryList from "./Stories/StoryList";
import PromptContainer from "../containers/PromptContainer";
import PromptPage from "./Prompts/PromptPage";
import SearchBar from "./Prompts/SearchBar";

function App() {
  const {getCurrentUser, user} = useContext(UserContext)


  useEffect(() => {
        getCurrentUser()
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

            <Route path="/signup">
              <SignUpForm />
            </Route>

            <Route path="/delete">
              <DeleteUser />
            </Route>

            <Route path="/prompts/new">
              <PromptForm />
            </Route>

            <Route path="/stories/new">
              <StoryForm />
              </Route>

            <Route path="/prompts/:promptId/stories">
            <PromptPage />
            </Route>

            <Route path="/prompts/:id">
            <PromptCard2 />
            </Route>

            <Route path="/prompts">
            <PromptContainer />
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
