import {useState, useEffect} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
import StoryForm from "../Stories/StoryForm"
import StoryList from "../Stories/StoryList"
import EditStory from "../Stories/EditStory"
import styled from "styled-components";
import "./Prompt.css"

const PromptPage = ({prompt, handleError}) => {
    const {promptId} = useParams()
    const location = useLocation()
    const [promptObj, setPromptObj] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [stories, setStories] = useState([]);
    const history = useHistory()
    
    useEffect(() => {   
        if (!prompt) {
            fetch(`/api/v1/prompts/${promptId}`)
            .then(resp => resp.json())
            .then(prompt => {
              setPromptObj(prompt)
              setStories(prompt.stories)
            })
        }
    }, [prompt, promptId]);

    const addNewStory = (storyObj) => {
      setStories(currentStories => [storyObj, ...currentStories])
    }

    const handleUpdate = (updatedPromptObj) => {
    //   e.preventDefault()
      setEditMode(false)
      setPromptObj(updatedPromptObj)
    }

    const handleClick = (e) => { 
      if (e.target.name === "delete") {
        fetch(`http://localhost:4000/api/v1/prompts/${promptObj.id}`, 
        {    method: "DELETE"})
        .then(() => history.push("/prompts"))
      } else {
        setEditMode(true)
      }
     }

    const finalPrompt = prompt ? prompt : promptObj
    if (!finalPrompt) return <h1>Loading...</h1>

    const Wrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    `;
  
return (
   <>
        <Wrapper>
            <div className= "prompt-card">
                <h3>Prompt Title: {finalPrompt.prompt_title}</h3>
                <h4>Prompt Body: {finalPrompt.prompt_body}</h4>
            </div>
        </Wrapper>
        <br />
        <div>
            <StoryList stories={stories} />
        </div>
        <Wrapper>
        <div>
            <hr />
            {location.pathname !== "/prompts" ? (<>
            <StoryForm addNewStory={addNewStory} promptId={finalPrompt.id} />
            <hr />
            </>) : null }
        </div>
        </Wrapper>
   </>
  )

}

export default PromptPage