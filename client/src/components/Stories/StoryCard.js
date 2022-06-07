import "./Story.css"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

const StoryCard = ({story}) => {
    const {id} = useParams()
    const [storyObj, setStoryObj] = useState(null);

    useEffect(() => {
        if (!story) {
            fetch(`http://localhost:4000/stories/${id}`)
            .then(resp => resp.json())
            .then(story => setStoryObj(story))
        }
    }, [story, id]);

    const finalStory = story ? story : storyObj
    if (!finalStory) return <h1>Loading...</h1>
    return (
        <div className= "story-card">
            <h2>Title: {finalStory.story_title}</h2>
            {/* <h2>Author: </h2> currently has access to user id - how do I get it access to username? */}
            {/* <h2>Prompt {story.prompt_id?}</h2> not sure how I should link it to  */ }
            <h4>Body: {finalStory.story_body}</h4>
            {/* <button>Favorite 💖</button> */}
        </div>
    )
}

export default StoryCard