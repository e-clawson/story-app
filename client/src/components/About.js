import styled from "styled-components";

const About = () => {
    return (
      <div>
        <Wrapper>
        <h1>About AnthologyApp</h1>
        </Wrapper>
        <Wrapper>
          <p>AnthologyApp is a place for short story writers to share their ideas with the world! 
        Users can view short story prompts created by the AnthologyApp community, create their own short
        stories based on prompts, and share their own short story prompt ideas with others! Get your 
        creative writing ideas flowing and share with a supportive and like-minded writing community! </p>
        </Wrapper>
       </div>
    )
  }

  const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
  
  
  export default About;