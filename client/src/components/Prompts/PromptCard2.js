import "./Prompt.css"
import {useState, useEffect, useContext} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
import StoryForm from "../Stories/StoryForm"
import StoryList from "../Stories/StoryList"
import { UserContext } from "../../context/user"

const PromptCard2 = ({prompt, handleError}) => {
    const {user} = useContext(UserContext)
    const {id} = useParams()
    const location = useLocation()
    const [promptObj, setPromptObj] = useState(null);
    const [prompts, setPrompts] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [stories, setStories] = useState([]);
    const history = useHistory()
    
    useEffect(() => {   
        if (!prompt) {
            fetch(`https://localhost:4000/api/v1/prompts/${id}`)
            .then(resp => resp.json())
            .then(prompt => {
              setPromptObj(prompt)
              setStories(prompt.stories)
            })
        }
    }, [prompt, id]);

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
  
return (
    <div className= "prompt-card">
        <h3>Prompt Title: {user ? (
        <Link to={`/prompts/${finalPrompt.id}/stories`}>{finalPrompt.prompt_title}</Link>) : (finalPrompt.prompt_title) }</h3>
        <h4>Prompt Body: {finalPrompt.prompt_body}</h4>
    </div>
  )

}

export default PromptCard2
