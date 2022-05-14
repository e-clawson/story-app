import React, { useState, useContext, useEffect, useCallback } from "react";
import {useHistory} from "react-router-dom"
import {MessageContext} from "../context/message"

const baseUrl = "http://localhost:3000/api/v1"
const UserContext = React.createContext()

function UserProvider({children}) {
    const [user, setUser] = useState(null);
    const history = useHistory();
    const {setMessage} = useContext(MessageContext)

    const getCurrentUser = useCallback(async() => {
        try {  
            const resp = await fetch(baseUrl + "/me")
             if (resp.status === 200) {
                 const data = await resp.json()
                 debugger
                 setUser(data)
             } else {
            const errorObj = await resp.json()
            setMessage(errorObj.error)
            }
        } catch (e) {
            setMessage(e.message)
        }
    }, [setMessage])

    const login = async(userInfo) => { 
        try{
            const resp = await fetch("" + baseUrl +"/login", {
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

    const signUp = async(userInfo) => { 
        try{
            const resp = await fetch("" + baseUrl +"/login", {
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


    return (
        <UserContext.Provider value={{user, setUser, 
        getCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}