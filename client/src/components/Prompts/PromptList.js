import PromptCard2 from "./PromptCard2"
import SearchResultCard from "./SearchResultCard"

const PromptList = ({prompts, searchResult}) => {
 const promptCards = prompts.map(prompt => <PromptCard2 key={prompt.id} prompt={prompt}/>)

 const searchResultCards = searchResult.map(result => <SearchResultCard key={result.id} result={result} />)
    
 return (
    <div>
      <div>{searchResultCards}</div>
      <div style = {{display:'flex', flexWrap:'wrap'}}>{promptCards}</div>
    </div>
  )
}

export default PromptList;