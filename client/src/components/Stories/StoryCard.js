import "./Story.css"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

const StoryCard = ({story}) => {
    const {id} = useParams()
    const [storyObj, setStoryObj] = useState(null);

    useEffect(() => {
        if (!story) {
            fetch(`http://localhost:4000/api/v1/stories/${id}`)
            .then(resp => resp.json())
            .then(story => setStoryObj(story))
        }
    }, [story, id]);
    console.log(story)

    const finalStory = story ? story : storyObj
    if (!finalStory) return <h1>Loading...</h1>
    return (
        <div className= "story-card">
            <h2>Title: {finalStory.story_title}</h2>
            <h4>Body: {finalStory.story_body}</h4>
            
        </div>
    )
}

export default StoryCard