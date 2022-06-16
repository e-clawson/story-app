import { useState, useEffect } from "react"
import PromptList from "../components/Prompts/PromptList.js"
import SearchBar from "../components/Prompts/SearchBar.js";


const PromptContainer = ({prompt}) => {
    const [prompts, setPrompts] = useState([]);

    useEffect(() => {
        fetch("/api/v1/prompts")
        .then(r => r.json()) 
        .then(data => setPrompts(data.data.map(p => p.attributes))) 
        .catch(err => alert(err))  
    }, []);

  return (
    <>
        <SearchBar />
        <h2>Prompt List</h2>
        <PromptList prompts={prompts} prompt={prompt}/>
    </>

  )
}

export default PromptContainer;