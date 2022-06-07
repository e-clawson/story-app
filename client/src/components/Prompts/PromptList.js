import PromptCard2 from "./PromptCard2"

const PromptList = ({prompts}) => {
 const promptCards = prompts.map(prompt => <PromptCard2 key={prompt.id} prompt={prompt}/>)
    
 return (
    <div>
      <div style = {{display:'flex', flexWrap:'wrap'}}>{promptCards}</div>
    </div>
  )
}

export default PromptList;