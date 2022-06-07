import "./Prompt.css"
import {useState, useEffect} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
import StoryForm from '../Stories/StoryForm'
import StoryList from '../Stories/StoryList'
import EditPrompt from './EditPrompt'

const PromptCard = ({prompt, story}) => {
    return (
        <div className= "prompt-card">
            <h2>Title: <Link to={`http://localhost:4000/api/v1/prompts/${propmt.prompt_id}`}>{prompt.prompt_title}</Link> </h2>
            <h4>Prompt Body: {prompt.prompt_body}</h4>
            {/* <button>Favorite 💖</button> */}
        </div>
    )
}

export default PromptCard