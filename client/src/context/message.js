import React, { useState } from "react";

const MessageContext = React.createContext()

function MessageProvider({children}) {
    const [message, setMessage] = useState(null);

    return (
        <MessageContext.Provider value={{message, setMessage }}>
            {children}
        </MessageContext.Provider>
    )
}

export {MessageContext, MessageProvider}