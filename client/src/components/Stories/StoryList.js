import StoryCard from "./StoryCard.js"

const StoryList = ({stories}) => {
 const storyCards = stories?.map(story => <StoryCard key={story.id} story={story}/>)
    
 return (
    <div>
      <div style = {{display:'flex', flexWrap:'wrap'}}>{storyCards}</div>
    </div>
  )
}

export default StoryList;