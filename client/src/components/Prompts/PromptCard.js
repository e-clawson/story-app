import "./Prompt.css"
import {useState, useEffect} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
import StoryForm from '../Stories/StoryForm'
import StoryList from '../Stories/StoryList'
import StoryCard from "../Stories/StoryCard"

const PromptCard = ({prompt}) => {
    const {id} = useParams()
    const location = useLocation()
    const [promptObj, setPromptObj] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [stories, setStories] = useState([]);
    const history = useHistory()
    
    // useEffect(() => {   
    //     if (!prompt) {
    //         fetch(`https://localhost:4000/api/v1/prompts/${id}`)
    //         .then(resp => resp.json())
    //         .then(prompt => {
    //           setPromptObj(prompt)
    //           setStories(prompt.stories)
    //         })
    //     }
    // }, [prompt, id]);

    return (
      <>
        <div className= "prompt-card">
            <h2>Title: <Link to={`/prompts/${prompt.id}/stories`}>{prompt.prompt_title}</Link> </h2>
            <h4>Prompt Body: {prompt.prompt_body}</h4>
        </div>
      </>  
    )

}

export default PromptCard