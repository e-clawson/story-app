import { useState } from "react"

const SearchBar = (props) => {
    const [prompt, setPrompt] = useState([])
    const [searchValue, setSearchValue] = useState([])
   
   const search = (() => {
    fetch(`http://localhost:3000/api/v1/search/?q=${searchValue}`)
    .then(resp => resp.json())
    .then(data => setPrompt(data))
    .catch(err => alert(err)) 
    })

    const handleChange = (e) => {
      setSearchValue(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        search()
        props.passSearchResult(prompt);
    }
 

    return (
       <>
       <div>
            <input type="text" placeholder="Search Prompts"
            onChange={handleChange}/>
            <button onClick={handleClick}> Search</button>
        </div>
       </>
    )
}
export default SearchBar;