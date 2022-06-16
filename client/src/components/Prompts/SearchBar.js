import { useState } from "react"

const SearchBar = () => {
    const [prompt, setPrompt] = useState([])
    const [searchValue, setSearchValue] = useState("")
   
   const search = (() => {
       console.log(searchValue, "hello")
    fetch(`http://localhost:3000/api/v1/search/?q=${searchValue}`)
    .then(resp => resp.json())
    .then(data => setPrompt(data)) 
    .catch(err => alert(err)) 
    })

    const handleChange = (e) => {
      setSearchValue(e.target.value)
      console.log(e)
    }

    const handleClick = (e) => {
        // e.preventDefault()
        search()
        console.log(searchValue)
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