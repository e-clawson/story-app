const SearchBar = () => {
    // const {search} = window.location;
    const query = new URLSearchParams(search).get('api/v1/search')

return(
    <form action="/" method="get">
        <label htmlFor="prompt_title">
            <span>Search Prompts by Title </span>
        </label>
        <input
            type="text"
            id="prompt_title"
            placeholder="Search by Title"
            name="api/v1/search"
        />
        <button type="submit">Search 🔎 </button>
    </form>
);
}

export default SearchBar;

//     const SearchBar = () => {
        
//         const handleSearch = () => {
//                 fetch(`https://localhost:3000/api/v1/search/${e}`)
//                 .then(resp => resp.json())
//                 .then(prompt => {
//                   setPromptObj(prompt)
//                 })
//         } //,[prompt]
//     // pass to the list page whatever is being reutrned 
        
//         return (
//             <div>
//                 <input type="text" placeholder="Search Prompt by Title"
//                 onChange={e => handleSearch(e.target.value)}/>
//             </div>
//         )
//     }
// export default SearchBar;

// const SearchBar = () => (

//     <form action="http://localhost:3000/api/v1/search" method="get">
//         <label htmlFor="prompt_title">
//             <span>Search Prompts by Title </span>
//         </label>
//         <input
//             type="text"
//             id="prompt_title"
//             placeholder="Search by Title"
//             name="prompt_title"
//         />
//         <button type="submit">Search 🔎 </button>
//     </form>
// );

// export default SearchBar;

// export const VillagerFilter = ({handleSearch}) => {
    
   
// const SearchBar = () => {   
    //         fetch(`https://localhost:3000/api/v1/search`)
    //         .then(resp => resp.json())
    //         .then(prompt => {
    //           setPromptObj(prompt)
    //           setStories(prompt.stories)
    //         })

//pass to the list page whatever is being reutrned 
    // }, [prompt, id]);
    
//     return (
//         <div>
//             <input type="text" placeholder="Search Villagers"
//             onChange={e => handleSearch(e.target.value)}/>
//         </div>
//     )
// }