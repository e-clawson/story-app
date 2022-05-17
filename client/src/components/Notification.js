import { MessageContext } from "../context/message";
import { useContext, useEffect } from "react";

const Notification = () => {
    const {message, setMessage} = useContext(MessageContext);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMessage()
        }, 3000);
        return () => {
            clearTimeout(timerId)
        };
    }, [message]);

    return (
        <div>
            <p className={message?.status}>{message.status}</p>
        </div>
    )
}

export default Notification;