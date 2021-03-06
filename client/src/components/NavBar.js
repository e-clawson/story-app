import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import { UserContext } from "../context/user";

const NavBar = () => {
  const {user} = useContext(UserContext)

  return (
   <>
      <Logo>
        <Link to="/"> AnthologyApp </Link>
      </Logo>
      <br/>
      <Wrapper>
      <Nav>
        <Button as={Link} to="/">
         Home
        </Button>
        <Button as={Link} to="/about">
         About
        </Button>
        {user ? (
          <>
            <Button as={Link} to="/prompts/new">
              New Prompt
            </Button>
            <Button as={Link} to="/profile">
              My Profile
            </Button>
            <Button as={Link} to="/logout">
              Logout
            </Button>
            {/* <Button as={Link} to="/delete">
              Delete Account 
              </Button> */}
          </>
          ) : (
            <>
              <Button as={Link} to="/login">
              Login
              </Button>
              <Button as={Link} to="/signup">
              Signup
              </Button>
            </>
          )
        }
      </Nav>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
`;

const Logo = styled.h1`
  font-family: "Goudy Bookletter 1911", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-size: 3rem;
  color: Green;
  background-color: lightgray;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  right: 8px;
`;

export default NavBar;
