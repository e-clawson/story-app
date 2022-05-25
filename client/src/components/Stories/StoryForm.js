import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Input, FormField, Label } from "../../styles";

const StoryForm = () => {
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
      history.push("/home")

  const newStory = {
      story_title: story.storyTitle,
      story_body: story.storyBody,
  }

  fetch("api/v1/stories", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newStory) 
  })
  
}

  return (
    <>
      <h3>Add A New Story!</h3>
      <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="storyTitle">Story Title</Label>
        <Input
          type="text"
          name="storyTitle"
          autoComplete="off"
          value={setStory.StoryTitle}
          onChange={handleChange}
        />
         </FormField>
         <FormField>
        <Label htmlFor="storyBody">Story Body</Label>
        <h4>(Story can be between 1 - 5000 characters)</h4>
        <Input
          type="text"
          name="storyBody"
          autoComplete="off"
          value={setStory.storyBody}
          onChange={handleChange}
        />
         </FormField>
      <FormField>
        <Button type="submit">Submit Story 📚</Button>
      </FormField>
    </form>
    </>
  )
}

export default StoryForm;