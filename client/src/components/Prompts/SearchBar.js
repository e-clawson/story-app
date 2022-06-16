
const SearchBar = () => (
    <form action={`http://localhost:4000/api/v1/search/`} method="get">
        <label htmlFor="header-search">
            <span>Search Prompts by Title </span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search by Title"
            name="prompt_title" 
        />
        <button type="submit">Search 🔎 </button>
    </form>
);

export default SearchBar;
