import { useState, useEffect } from "react"
import PromptList from "../components/Prompts/PromptList.js"
import { PromptFilter } from "../components/Prompts/PromptFilter";

const PromptContainer = () => {
    const [prompts, setPrompts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [filteredMusic, setFilteredMusic] = useState(musics)
    // const [MyListView, setMyListView] = useState(false)
    // const [favoriteMusic, setFavoriteMusic] = useState(musics)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const resp = await fetch("http://localhost:3000/api/v1/prompts")
                const data = await resp.json()

                setPrompts(data)
                setLoading(false)
            } catch (error) {
                alert(error)
            }
        }
    
        fetchData()
    }, []);
    if (!!loading) return <h1> Loading...</h1>

  return (
    <>
        <h2>Prompt List</h2>
        <PromptList prompts={prompts} />
    </>

  )
}

export default PromptContainer;