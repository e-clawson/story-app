import React from "react";
import styled from "styled-components";
import PromptContainer from "../containers/PromptContainer";
import PromptFilter from "./Prompts/PromptFilter";


const Home = () => {
  return (
    <div> 
      <Wrapper>
        <h2>Homepage</h2>
      </Wrapper>
      <Wrapper>
        <h3> Log in or Sign up to explore stories, and write your own stories and prompts!  </h3>
      </Wrapper>
      <PromptContainer/>
    </div>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export default Home