import "./Prompt.css"

const PromptCard = ({prompt}) => {
    console.log(prompt)
    return (
        <div className= "prompt-card">
            <h2>Title: {prompt.prompt_title}</h2>
            <h4>Body: {prompt.prompt_body}</h4>
            <button>Favorite 💖</button>

            {/* <h2>Story Title {prompt.stories.data.}</h2> */}


        </div>
    )
}

export default PromptCard