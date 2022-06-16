import { useState } from "react"
import {useParams} from "react-router-dom"

const PromptFilter = () => {
    const [search, setSearch] = useState([])

    const getSearchPrompt = () => {
        fetch(`http://localhost:4000/api/v1/prompts/${search}`)
        .then(resp => resp.json())
        .then(search => setSearch(search))
        console.log(search)
    }
    
    const handleSearch {


    }

    return (
        <div>
            <input type="text" placeholder="Search by Title"
            onChange={e => handleSearch(e.target.value)}/>
        </div>
    )
}
export default PromptFilter;
