import {useState} from "react"

const EditStory = ({storyObj, handleUpdate, handleError}) => {
    const [story, setStory] = useState({
        title: storyObj.story_title,
        body: storyObj.story_body
    });

    const handleChange = (e) => {
        setStory({
            ...story,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // if ([story.storyTitle, story.storyBody].some(val => val.trim() === "")) {
        //     alert("Please fill out all required story information!")
        // }

       fetch(`http://localhost:4000/api/v1/stories/${storyObj.id}`, {
           method: "PATCH",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({story_title: story.title, story_body: story.body})
       })
       .then((resp) => {
            if (resp.status === 200) {
                resp.json()
                .then(data => handleUpdate(data))
             } else {
            resp.json()
            .then(errorObj => {
                alert(errorObj.error)
                setStory({title: story.title, body: story.body})
            })
        }
        })
        .catch(err => handleError(err.message))    
    }
    return (
        <>
            <h3>Edit Story</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" name="title" value={story.title} required/><br />
                <label htmlFor="content">Content</label>
                <input onChange={handleChange} type="text" name="body" value={story.body} required/><br />
                <input type="submit" value="Edit Story" />
            </form>
        </>
    )
}

export default EditStory