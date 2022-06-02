import { useEffect, useContext } from "react";
import { MessageContext } from "../../context/message";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../context/user";

const DeleteUser = () => {
    const {setUser} = useContext(UserContext);
    const {setMessage} = useContext(MessageContext);
    const history = useHistory()

    useEffect(() => {
        fetch("api/v1/delete", {
            method: "DELETE"
        })
        .then(res => {
            if (res.status === 200)  {
                res.json()
                .then(data => {
                    setUser(null)
                    setMessage({message: data.message, status: "User Successfully Deleted!"})
                    history.push("/home")
                    console.log("successfully deleted")
                })
            }
            else {
                res.json()
                .then(data => {
                    setUser(null)
                    setMessage({message: data.error, status: "User Not Deleted!"})
                    console.log("not deleted")
                })
            }
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>Deleting User...</div>
    )
}

export default DeleteUser;