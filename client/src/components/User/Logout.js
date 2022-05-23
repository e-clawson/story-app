import {useEffect, useContext} from 'react'
import {UserContext} from 'import { UserContext } from "../../context/user.js'
import {useHistory} from 'react-router-dom'

function Logout() {
   const {logout} = useContext(UserContext)
   const history = useHistory()

   useEffect(() => {
       const handleLogout = async () => {
           const onLogout = await logout()
           if (onLogout) {
               history.push("/login")
           }
       }
       handleLogout()
   }, [logout, history]);

   return (
       <div> Logging Out... </div>
   )
};



export default Logout