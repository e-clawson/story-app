import "./Story.css"

const StoryCard = ({story}) => {
    console.log(story)
    return (
        <div className= "story-card">
            <h2>Title: {story.story_title}</h2>
            {/* <h2>Author: </h2> currently has access to user id - how do I get it access to username? */}
            {/* <h2>Prompt {story.prompt_id?}</h2> not sure how I should link it to  */ }
            <h4>Body: {story.story_body}</h4>
            <button>Favorite 💖</button>
        </div>
    )
}

export default StoryCard