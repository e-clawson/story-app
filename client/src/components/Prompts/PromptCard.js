import "./Prompt.css"
import {useState, useEffect} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
import StoryForm from '../Stories/StoryForm'
import StoryList from '../Stories/StoryList'
import EditPrompt from './EditPrompt'

const PromptCard = ({prompt, story}) => {
    return (
        <div className= "prompt-card">
            <h2>Title: <Link to={`/api/v1/prompts/${prompt.id}`}>{prompt.prompt_title}</Link> </h2>
            <h4>Body: {prompt.prompt_body}</h4>
            {/* <button>Favorite 💖</button> */}
            <button><Link to="/newstory">Write a Story!</Link></button>


        </div>
    )
}

export default PromptCard