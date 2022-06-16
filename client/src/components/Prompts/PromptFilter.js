import {useState} from "react"

const PromptFilter = () => {
    const [prompt, setPrompt] = useState([])

   const onChange = (() => {
        fetch(`/api/v1/prompts/${prompt}`)
        .then(r => r.json()) 
        .then(data => setPrompt(data.data.map(p => p.attributes))) 
        .catch(err => alert(err))  
    }, [prompt, setPrompt])
    

    return (
        <div>
            <input type="text" placeholder="Search by Title"
            onChange={e => onChange(e.target.value)}/>
        </div>
    )
}
export default PromptFilter;

// export const VillagerFilter = ({handleSearch}) => {
    
//     return (
//         <div>
//             <input type="text" placeholder="Search Villagers"
//             onChange={e => handleSearch(e.target.value)}/>
//         </div>
//     )
// }
