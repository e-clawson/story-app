import { useState, useEffect } from "react"
import StoryList from "../components/Stories/StoryList.js"


const StoryContainer = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch("/api/v1/stories")
        .then(r => r.json())
        .then(data => setStories(data.data.map(p => p.attributes)))
        .catch(err => alert(err))  
    }, []);

  return (
    <>
        <h2>Story List</h2>
        <StoryList prompts={prompts} />
    </>

  )
}

export default StoryContainer;