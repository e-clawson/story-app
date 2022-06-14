import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Input, FormField, Label } from "../../styles";

const PromptForm = ({addNewPrompt}) => {
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

  const newPrompt = {
    prompt_title: prompt.promptTitle,
    prompt_body: prompt.promptBody
  }

  console.log(newPrompt)

  fetch(`http://localhost:4000/api/v1/prompts`, {
      method: "POST", 
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrompt) 
    })
    .then(resp => {
      if (resp.status === 201) {
        resp.json()
        .then(newPrompt => {
            addNewPrompt(newPrompt)
            setPrompt({promptTitle: "", promptBody: ""})
        })
      } else {
        resp.json()
        .then(errorObj => {
            alert(errorObj.error)
            setPrompt({promptTitle: "", promptBody: ""})
      })
      }
    })
  .catch(err => alert(err))
};

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
          rows= "2"
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