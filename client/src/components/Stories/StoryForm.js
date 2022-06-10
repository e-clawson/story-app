import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Input, FormField, Label } from "../../styles";

const StoryForm = ({promptId, addNewStory}) => {
  const [story, setStory] = useState({
      storyTitle: "",
      storyBody: "", 
      
  });

  // const history = useHistory()

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
      story_title: story.storyTitle,
      story_body: story.storyBody,
  }

  console.log(newStory)

  fetch(`http://localhost:4000/api/v1/prompts/${promptId}/stories`, {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newStory) 
  })
  .then(resp => {
    if (resp.status === 201) {
        resp.json()
        .then(newStory => {
            addNewStory(newStory)
            setStory({storyTitle: "", storyBody: ""})
        })
      } else {
        resp.json()
        .then(errorObj => {
            alert(errorObj.error)
            setStory({storyTitle: "", storyBody: ""})
        })
    }
  })
  .catch(err => alert(err))
  };

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
          value={setStory.storyTitle}
          onChange={handleChange}
        />
         </FormField>
         <FormField>
        <Label htmlFor="storyBody">Story Body</Label>
        <h4>(Story can be between 1 - 5000 characters)</h4>
        <textarea
          type="text"
          rows="12"
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