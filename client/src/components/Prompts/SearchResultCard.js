const SearchResultCard = ({result}) => {

    return (
        <>
        <h2>Search Results:</h2>
        <div className= "prompt-card">
            <h3>Prompt Title: {result.prompt_title}</h3>
            <h4>Prompt Body: {result.prompt_body}</h4>
        </div>
        <hr/>
        </>
      )
}

export default SearchResultCard;