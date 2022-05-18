import React, { useState, useContext, useEffect, useCallback } from "react";
import {useHistory} from "react-router-dom"
import {MessageContext} from "./message"

// const baseUrl = "http://localhost:3000/api/v1"
const UserContext = React.createContext()

function UserProvider({children}) {
    const [user, setUser] = useState(null);
    const history =useHistory();
    const {setMessage} = useContext(MessageContext)

    // const getCurrentUser = useCallback(async() => {
    //     try {  
    //         const resp = await fetch("/api/v1/me")
    //          if (resp.status === 200) {
    //              const data = await resp.json()
    //              setUser({...data.data.attributes})
    //          } else {
    //             const errorObj = await resp.json()
    //             setMessage({message: errorObj.error, color: "red"})
    //         }
    //     } catch (e) {
    //         setMessage({message: e.message, color: "red"})
    //     }
    // }, [setMessage])

    const login = async(userInfo) => { 
        try {
            const resp = await fetch("/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                    "Accept": "application/json"
                }, 
                body: JSON.stringify(userInfo)
            })
            if (resp.status === 202) {
                const data = await resp.json()
                setUser({...data.data.attributes})
                // history.push("/profile")
                return true
            } else {
                const errorObj = await resp.json()
                setMessage({message: errorObj.error, color: "red"})
                return false
            }
            
        } catch(e) {
            setMessage({message: e.message, color: "red"})
        }
    }

    const signup = async(userInfo) => { 
        try {
            const resp = await fetch("/api/v1/signup", {
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
            const resp = await fetch("/api/v1/logout", {
                method: "DELETE"
            })
            setMessage({message: "You have successfully logged out", color: "green"})
            setUser(null)
            return true 
        } catch(e) {
            setMessage({message: e.message, color: "red"})
            return false
        }
    }


    return (
        <UserContext.Provider value={{user, setUser, login, signup, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}