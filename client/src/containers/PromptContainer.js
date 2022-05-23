import { useState, useEffect } from "react"
import PromptList from "../components/Prompts/PromptList.js"


const PromptContainer = () => {
    const [prompts, setPrompts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/prompts")
        .then(r => r.json())
        .then(data => setPrompts(data))
        .catch(err => alert(err))  
    }, []);

  return (
    <>
        <h2>Prompt List</h2>
        <PromptList prompts={prompts} />
    </>

  )
}

export default PromptContainer;