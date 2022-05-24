import { useState } from "react"
import { useHistory } from "react-router-dom"

const PromptForm = () => {
  const [story, setStory] = useState({
      storyTitle: "",
      storyBody: "", 
      
  });

  const history = useHistory()

  const handleChange = (e) => {
      setStory({
          ...story,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = e => {
      e.preventDefault()
      if ([story.storyTitle, story.storyBody].some(val => val.trim() === "")) {
        alert("Please provide all the requested information")
      }

  const newStory = {
      title: story.storyTitle,
      title: story.storyBody,
  }

  fetch("/", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newMusic) 
  })
  
}

  return (
    <>
      <h3>Add New Music</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title"> Title</label>
          <input onChange={handleChange} type="text" name="title" value={music.title} required/> <br />
          <label htmlFor="instrumentation"> Instrumentation</label>
          <input onChange={handleChange} type="text" name="instrumentation" value={music.instrumentation} required/> <br />  
          <label htmlFor="composerFirstName"> Composer First Name</label>
          <input onChange={handleChange} type="text"  name="composerFirstName" value={music.composerFirstName} required/> <br />
          <label htmlFor="composerLastName"> Composer Last Name</label>
          <input onChange={handleChange} type="text"  name="composerLastName" value={music.composerLastName} required/> <br />
          <label htmlFor="yearComposed"> Year Composed (input as number - ex: 1962)</label>
          <input onChange={handleChange} type="number" name="yearComposed" value={music.yearComposed} required/> <br />
          <label htmlFor="length"> Length (please input like so: example "5 minutes")</label>
          <input onChange={handleChange} type="text" name="length" value={music.length} required/> <br />
          <input type="submit" value="Add Music" />
        </form>
    </>
  )
}

export default MusicForm;