import { useState } from "react"
import { useHistory } from "react-router-dom"

const PromptForm = () => {
  const [prompt, setPrompt] = useState({
      promptTitle: "",
      promptBody: "", 
      
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
      title: prompt.promptTitle,
      title: prompt.promptBody,
  }

  fetch("/prompts", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newPrompt) 
  })
  
}

  return (
    <>
      <h3>Add A New Story Prompt!</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title"> Title</label>
          <input onChange={handleChange} type="text" name="title" value={prompt.promptTitle} required/> <br />
          <label htmlFor="instrumentation"> Prompt Body</label>
          <input onChange={handleChange} type="text" name="body" value={prompt.promptBody} required/> <br />  
        </form>
    </>
  )
}

export default PromptForm;