import {  useState } from "react";
import { MessageContext } from "../../context/message";
import { useHistory } from "react-router-dom";


const DeleteStory = () => {
    const [story, setStory] = useState([]);
    const {setMessage} = useContext(MessageContext);
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/stories/${story.id}`, {
           method: "DELETE",
           headers: {
               "Content-Type": "application/json"
           },
        })
        .then(res => {
            if (res.status === 200)  {
                res.json()
                .then(data => {
                    setStory(null)
                    setMessage({message: data.message, status: "Story Successfully Deleted!"})
                    history.push("/home")
                    console.log("story successfully deleted")
                })
            }
            else {
                res.json()
                .then(data => {
                    setStory(null)
                    setMessage({message: data.error, status: "Story Not Deleted!"})
                    console.log("not deleted")
                })
            }
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>Deleting Story...</div>
    )
}

export default DeleteStory;