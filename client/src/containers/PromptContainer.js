import { useState, useEffect } from "react"
import PromptList from "../components/Prompts/PromptList.js"
import SearchBar from "../components/Prompts/SearchBar.js";


const PromptContainer = () => {
    const [prompts, setPrompts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    const passSearchResult = (data) => {
      setSearchResult(data);
    };

    useEffect(() => {
        fetch("/api/v1/prompts")
        .then(r => r.json()) 
        .then(data => setPrompts(data.data.map(p => p.attributes))) 
        .catch(err => alert(err))  
    }, []);

  return (
    <>
        <SearchBar passSearchResult={passSearchResult}/>
        <h2>Prompt List</h2>
        <PromptList prompts={prompts} searchResult={searchResult} />
    </>

  )
}

export default PromptContainer;