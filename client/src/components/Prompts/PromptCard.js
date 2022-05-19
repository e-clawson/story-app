import "./Prompt.css"

export const PromptCard = ({prompt}) => {

    return (
        <div className= "prompt-card">
            <h2>Title: {prompt.title}</h2>
            <button>Favorite 💖</button>
            <h4>Body: {prompt.body}</h4>
        </div>
    )
}