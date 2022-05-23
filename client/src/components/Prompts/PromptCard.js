import "./Prompt.css"

const PromptCard = ({prompt}) => {

    return (
        <div className= "prompt-card">
            <h2>Title: {prompt.prompt_title}</h2>
            <button>Favorite 💖</button>
            <h4>Body: {prompt.prompt_body}</h4>
        </div>
    )
}

export default PromptCard