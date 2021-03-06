import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
// import { createGlobalStyle } from "styled-components";
import {UserProvider} from '../src/context/user';
import { MessageProvider } from "../src/context/message";

// const GlobalStyle = createGlobalStyle`
//   *,
//   *::before, 
//   *::after {
//     box-sizing: border-box;
//   }

//   html, body {
//     margin: 0;
//   }

//   body {
//     font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
//   }
// `;

ReactDOM.render(
  <BrowserRouter>
      <MessageProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </MessageProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
