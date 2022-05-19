import { MessageContext } from "./context/message";
import { useContext, useEffect, useState } from "react";

const Notification = () => {
    const [vanishMode, setVanishMode] = useState(false);
    const {message} = useContext(MessageContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVanishMode(true)
        }, 5000)
        return () => {
            clearTimeout(timer)
            setVanishMode(false)
        };
    }, [message]);

    return (
        <div>
           {!vanishMode ? <p style={{fontSize: "bold", backgroundColor: message?.color}}>{message?.message}</p> : null}
        </div>
    )
}

export default Notification