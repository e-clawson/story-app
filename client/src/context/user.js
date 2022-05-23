import React, { useState, useContext, useCallback, useEffect } from "react";
import {useHistory} from "react-router-dom"
import {MessageContext} from "./message"

const baseUrl = "http://localhost:3000/api/v1"
const UserContext = React.createContext()

function UserProvider({children}) {
    const [user, setUser] = useState(null);
    const history = useHistory();
    const {setMessage} = useContext(MessageContext)

    const getCurrentUser = useCallback(async () => {  
            const resp = await fetch( baseUrl )
             if ( resp.status === 200) {
                 const data = await resp.json()
                 setUser(data)
             } else {
                const errorObj = await resp.json()
                setMessage(errorObj.error)
            }
    }, [setMessage])

    const login = async (userInfo) => { 
           try{
            const resp = await fetch("" + baseUrl + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                    "Accept": "application/json"
                }, 
                body: JSON.stringify(userInfo)
           })
            if (resp.status === 202) {
                const data = await resp.json()
                setUser(data)
                history.push("/profile")
            } else {
               const errorObj = await resp.json()
               setMessage(errorObj.error)
            }
        } catch(e) {
                setMessage(e.message)
            }
    }       

    const signup = async(userInfo) => { 
        try{
            const resp = await fetch("" + baseUrl + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                    "Accept": "application/json"
                }, 
                body: JSON.stringify(userInfo)
           })
           if (resp.status === 201) {
                const data = await resp.json()
                setUser(data)
                history.push("/profile")
           } else {
               const errorObj = await resp.json()
               setMessage(errorObj.error)
           }

        } catch(e) {
                setMessage(e.message)
            }
    }     

    const logout = async() => {
        try {
            const resp = await fetch("api/v1/logout", {
                method: "DELETE", 
            })
             setMessage("You were successfully logged out")
             setUser(null)
             return true
            //  history.push("/login")
        } catch(e) {
            setMessage(e.message)
            return false
        }
    }

    return (
        <UserContext.Provider value={{user, setUser, getCurrentUser, login, signup, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}