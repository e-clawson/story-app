import {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../../context/user.js"
import { MessageContext } from '../../context/message.js'

const Login = () => {
    const {login} = useContext(UserContext);
    const {setMessage} = useContext(MessageContext); 

    const [userObj, setUserObj] = useState({
        email: "", 
        password: ""
    });

    const history = useHistory()

    const handleChange = ({target: {name, value}}) => {
        setUserObj({
            ...userObj,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if  ([userObj.email, userObj.password].some(val => val.trim() === "")){
            setMessage ("Please provide an email and password")
        }
        else {
            login(userObj)
        }
        // history.push("/home")
    }
    
  return (
    <>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="text" name="email" value={userObj.email} required/><br />
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" name="password" value={userObj.password} required/><br />
            <input type="submit" value="Login" />
        </form>
    </>
  )
}

export default Login;