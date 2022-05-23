import React, { useEffect, useContext, useCallback  } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header.js";
import NavBar from "./NavBar";
import {UserContext} from "../context/user";
import About from "./About.js";
import Notification from "./Notification.js";
import Login2 from "./User/Login.js";
import Logout from "./User/Logout";
import Profile from "./User/Profile";
import PromptContainer from "../containers/PromptContainer";
import PromptCard from "./Prompts/PromptCard";
import { MessageContext } from "../context/message";
import Signup2 from "./User/Signup2";

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
             {/* <Login2 />  */}
            </Route>
            <Route path="/logout">
              {/* <Logout />  */}
            </Route>
            <Route path="/profile">
              <Profile /> 
            </Route>
            <Route path="/signup">
              <Signup2 />
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
