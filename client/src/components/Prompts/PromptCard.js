import "./Prompt.css"
import {useState, useEffect} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
import StoryForm from '../Stories/StoryForm'
import StoryList from '../Stories/StoryList'
import EditPrompt from './EditPrompt'

const PromptCard = ({prompt, story}) => {
    return (
        <div className= "prompt-card">
            <h2>Title: {prompt.prompt_title}</h2>
            <h4>Body: {prompt.prompt_body}</h4>
            {/* <button>Favorite 💖</button> */}
            {/* <button>Write a Story!</button> */}

            {/* <h2>Story Title {prompt.stories}</h2> */}


        </div>
    )
}

export default PromptCard