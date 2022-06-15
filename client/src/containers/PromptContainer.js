import { useState, useEffect } from "react"
import PromptList from "../components/Prompts/PromptList.js"


const PromptContainer = () => {
    const [prompts, setPrompts] = useState([]);

    useEffect(() => {
        fetch("/api/v1/prompts") // (argument)
        .then(r => r.json()) // response object - promise
        .then(data => setPrompts(data.data.map(p => p.attributes))) // 2nd response object - 2nd promise  - parses as JSON
        .catch(err => alert(err))  //catch sends and error message if the fetch fails 
    }, []);

  return (
    <>
        <h2>Prompt List</h2>
        <PromptList prompts={prompts} />
    </>

  )
}

export default PromptContainer;