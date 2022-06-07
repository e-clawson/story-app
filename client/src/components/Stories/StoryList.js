import StoryCard from "./StoryCard.js"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const StoryList = ({stories, handleError}) => {
    const {promptId} = useParams()
    const [storyList, setStoryList] = useState(null)
    
    useEffect(() => {
        if (!stories) {
            fetch(`http://localhost:4000/prompts/${promptId}/stories`)
            .then(resp => {
                if (resp.status === 200) {
                    resp.json()
                    .then(stories => setStoryList(stories))
                } else {
                    resp.json()
                    .then(errorObj => handleError(errorObj.error))
                }
            })
            .catch(error => handleError(error))
        }
    }, [promptId, stories, handleError])

    const finalStoryList = stories ? stories : storyList
    const renderStories = finalStoryList?.map(story => <StoryCard key={story.id} story={story}/>)
    return (
        <div style = {{display:'flex', flexWrap:'wrap'}}>{renderStories}</div>
    )
}

export default StoryList

// const StoryList = ({stories}) => {
//  const storyCards = stories?.map(story => <StoryCard key={story.id} story={story}/>)
    
//  return (
//     <div>
//       <div style = {{display:'flex', flexWrap:'wrap'}}>{storyCards}</div>
//     </div>
//   )
// }

// export default StoryList;