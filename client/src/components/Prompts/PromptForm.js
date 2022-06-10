import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Input, FormField, Label } from "../../styles";

const PromptForm = ({handleError}) => {
  const [prompt, setPrompt] = useState({
      promptTitle: "",
      promptBody: ""
  });
  
  const history = useHistory()

  const handleChange = (e) => {
      setPrompt({
          ...prompt,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = e => {
      e.preventDefault()
      if ([prompt.promptTitle, prompt.promptBody].some(val => val.trim() === "")) {
        alert("Please provide all the requested information")
      }
      history.push("/home")

  fetch("http://localhost:4000/api/v1/prompts", {
      method: "POST", 
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({prompt:{prompt_title: prompt.promptTitle, prompt_body: prompt.promptBody}}) 
    })
    .then((resp) => {
      if (resp.status === 201) {
         history.push("/home")
      } else {
     resp.json().then(errorObj => handleError(errorObj.error))
    }
    })
    .catch(err => handleError(err.message))
  }
  return (
    <>
      <h3>Add A New Story Prompt!</h3>
      <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="promptTitle">Prompt Title</Label>
        <Input
          type="text"
          name="promptTitle"
          autoComplete="off"
          value={setPrompt.promptTitle}
          onChange={handleChange}
        />
         </FormField>
         <FormField>
        <Label htmlFor="promptBody">Prompt Body</Label>
        <Input
          type="text"
          name="promptBody"
          autoComplete="off"
          value={setPrompt.promptBody}
          onChange={handleChange}
        />
         </FormField>
      <FormField>
        <Button type="submit">Submit Prompt</Button>
      </FormField>
    </form>
    </>
  )
}
export default PromptForm