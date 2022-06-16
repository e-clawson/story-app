export const SearchBar = ({handleSearch}) => {
    
    return (
        <div>
            <input type="text" placeholder="Search Prompts by Title"
            onChange={e => handleSearch(e.target.value)}/>
        </div>
    )
}
