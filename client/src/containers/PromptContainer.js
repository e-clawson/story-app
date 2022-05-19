import { useState, useEffect } from "react"
import PromptList from "../components/Prompts/PromptList.js"
import { PromptFilter } from "../components/Prompts/PromptFilter";

const PromptContainer = () => {
    const [prompts, setPrompts] = useState([]);

    useEffect(() => {
        fetch("/api/v1/prompts")
        .then(r => r.json())
        .then(data => setPrompts(data.data.map(p => p.attributes)))
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