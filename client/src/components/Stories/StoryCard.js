import "./Story.css"
import {useState, useEffect, useContext} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
import EditStory from "./EditStory"
import StoryList from "./StoryList"
import StoryForm from "./StoryForm"
import { UserContext } from "../../context/user"

const StoryCard = ({story, handleError}) => {
    const {id} = useParams()
    const location = useLocation()
    const [storyObj, setStoryObj] = useState(null);
    // const [promptObj, setPromptObj] = useState(null);
    const [editMode, setEditMode] = useState(false);
    // const [stories, setStories] = useState([]);
    const history = useHistory()
    const {user} = useContext(UserContext)

    useEffect(() => {
        if (!story) {
            fetch(`http://localhost:4000/api/v1/stories/${id}`)
            .then(resp => resp.json())
            .then(story => {
                setStoryObj(story)
            })
        }
    }, [story, id]);
    console.log(story)

    const addNewStory = (storyObj) => {
        setStoryObj(currentStories => [storyObj, ...currentStories])
      }

      const handleUpdate = (updatedStoryObj) => {
        // e.preventDefault()
        setEditMode(false)
        setStoryObj(updatedStoryObj)
      }

    const handleClick = (e) => { 
        if (e.target.name === "delete") {
          fetch(`http://localhost:4000/api/v1/stories/${story.id}`, {    method: "DELETE"
          })
          .then(() => history.push("/home"))
        } else {
          setEditMode(true)
        }
       }

    const finalStory = storyObj ? storyObj : story
    if (!finalStory) return <h1>Loading...</h1>
    
    return (
        <div className= "story-card">
         {!editMode ? <>
            <h2>Title: {finalStory.story_title}</h2>
            <h4>Body: {finalStory.story_body}</h4>
    
            {location.pathname !== "/stories" && parseInt(user?.data.id) === finalStory.user_id ? <>
            <button name="edit-mode" id="edit-btn" onClick={handleClick}>Edit</button>
            <button name="delete" id="delete-btn" onClick={handleClick}>Delete</button>
            </> : null}
            </> : <EditStory handleError={handleError} storyObj={finalStory} handleUpdate={handleUpdate}/>}
            {location.pathname !== "/stories" ? (<>
            </>) : null } 
        </div>
    )
}

export default StoryCard