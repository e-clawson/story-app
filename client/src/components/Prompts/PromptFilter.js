// import {useState, useEffect} from "react"
// import {Link, useParams, useLocation, useHistory} from "react-router-dom"
// import StoryForm from "../Stories/StoryForm"
// import StoryList from "../Stories/StoryList"
// import EditStory from "../Stories/EditStory"
// import styled from "styled-components";
// import "./Prompt.css"

// const PromptFilter = ({prompt, handleError}) => {
//     const {prompt_title} = useParams()
//     const location = useLocation()
//     const [promptObj, setPromptObj] = useState(null);
//     const [editMode, setEditMode] = useState(false);
//     const [stories, setStories] = useState([]);
//     const history = useHistory()
    
//     useEffect(() => {   
//         if (!prompt) {
//             fetch(`/api/v1/search/${prompt_title}`)
//             .then(resp => resp.json())
//             .then(prompt => {
//               setPromptObj(prompt)
//               setStories(prompt.stories)
//             })
//         }
//     }, ([prompt, prompt_title]));

//     const handleUpdate = (updatedPromptObj) => {
//     //   e.preventDefault()
//       setEditMode(false)
//       setPromptObj(updatedPromptObj)
//     }

//     const handleSearch = (e) => { 
//       if (e.target.name === "get") {
//         fetch(`http://localhost:4000/api/v1/prompts/${prompt_title}`)
//         .then(resp => resp.json())
//         .then(prompt => {
//           setPromptObj(prompt)
//           setStories(prompt.prompt_title)
//         })
//     }
// }, [prompt, prompt_title]);

//     const finalPrompt = prompt ? prompt : promptObj
//     if (!finalPrompt) return <h1>Loading...</h1>


// return (
//    <>
//     <div>
//         <SearchBar handleSearch={handleSearch} prompt_title={finalPrompt.prompt_title} />
//     </div>
//     <div className= "prompt-card">
//             <h3>Prompt Title: {finalPrompt.prompt_title}</h3>
//             <h4>Prompt Body: {finalPrompt.prompt_body}</h4>
//      </div>
//    </>
//   )

// }

// export default PromptFilter
