import PromptCard from "./PromptCard.js"

const PromptList = ({prompts}) => {
 const promptCards = prompts?.map(prompt => <PromptCard key={prompt.id} prompt={prompt}/>)
    
 return (
    <div>
      <div style = {{display:'flex', flexWrap:'wrap'}}>{promptCards}</div>
    </div>
  )
}

export default PromptList;