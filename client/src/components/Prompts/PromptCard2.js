import {useState, useEffect} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
import StoryForm from "../Stories/StoryForm"
import StoryList from "../Stories/StoryList"
import EditPrompt from "../Prompts/EditPrompt"

const PromptCard2 = ({prompt, handleError}) => {
    const {id} = useParams()
    const location = useLocation()
    const [promptObj, setPromptObj] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [stories, setStories] = useState([]);
    const history = useHistory()
    
    useEffect(() => {   
        if (!prompt) {
            fetch(`/api/v1/prompts/${id}`)
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
        fetch(`http://localhost:4000/prompts/${promptObj.id}`, 
        {    method: "DELETE"})
        .then(() => history.push("/prompts"))
      } else {
        setEditMode(true)
      }
     }

    const finalPrompt = prompt ? prompt : promptObj
    if (!finalPrompt) return <h1>Loading...</h1>
  
return (
    <div>
      {!editMode ? <>
        <h3>Title: <Link to={`/prompts/${finalPrompt.id}`}>{finalPrompt.title}</Link></h3>
        <h4>Content: {location.pathname !== "/prompts" ? finalPrompt.content : `${finalPrompt.content.slice(0, 20)}...`}</h4>
        {location.pathname !== "/prompts" ? <>
          <button name="edit-mode" id="edit-btn" onClick={handleClick}>Edit</button>
          <button name="delete" id="delete-btn" onClick={handleClick}>Delete</button>
        </> : null}
        </> : <EditPrompt handleError={handleError} promptObj={finalPrompt} handleUpdate={handleUpdate}/>}
        <hr />
        <hr />
        {location.pathname !== "/prompts" ? (<>
          <StoryForm addNewStory={addNewStory} promptId={finalPrompt.id} />
          <br />
        <hr />
        <hr />
          <StoryList stories={stories} />
        </>) : null }
    </div>
  )
}

export default PromptCard2