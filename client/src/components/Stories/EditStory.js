import {useState} from "react"

const EditStory = ({storyObj, handleUpdate, handleError}) => {
    const [story, setStory] = useState({
        title: storyObj.storyTitle,
        body: storyObj.storyBody
    });

    const handleChange = (e) => {
        setPost({
            ...story,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([story.storyTitle, story.storyBody].some(val => val.trim() === "")) {
            alert("You must fill in all the information")
        }

       fetch(`http://localhost:4000/prompts/${storyObj.id}`, {
           method: "PATCH",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({title: story.storyTitle, body: story.storyBody})
       })
       .then((resp) => {
            if (resp.status === 201) {
                resp.json()
                .then(data => handleUpdate(data))
            } else {
                resp.json()
                .then(errorObj => handleError(errorObj.error))
            }
        })
        .catch(err => handleError(err.message))
       
        
    }
    return (
        <>
            <h3>Edit Story</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" name="storyTitle" value={story.storyTitle} required/><br />
                <label htmlFor="content">Content</label>
                <input onChange={handleChange} type="text" name="storyBody" value={story.storyBody} required/><br />
                <input type="submit" value="Update Post" />
            </form>
        </>
    )
}

export default EditPostForm