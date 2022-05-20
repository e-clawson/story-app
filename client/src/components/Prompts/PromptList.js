import PromptCard from "./PromptCard.js"

const PromptList = ({prompts}) => {
 const promptCards = prompts.map(prompt => <PromptCard key={prompt.id} prompt={prompt}/>)
    
 return (
    <div>
      <h2>All Story Prompts </h2>
      <div style = {{display:'flex', flexWrap:'wrap'}}>{promptCards}</div>
    </div>
  )
}

export default PromptList;