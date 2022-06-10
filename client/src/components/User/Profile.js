import React, {useContext} from 'react';
import { UserContext } from '../../context/user';
// import { MessageContext } from '../../context/message';
import { Redirect } from 'react-router-dom'; 
import "./User.css"

const Profile = () => {
    const {user} = useContext(UserContext)
    console.log(user)
    if (!user?.data) return <Redirect to="/login" />
  
    return (
    <div className= "user-card" > 
        <h1>Hello, {user.data.attributes.username}!</h1>
        <h2> User Information: </h2>
        <h3> Name:  {user.data.attributes.first_name} {user.data.attributes.last_name}</h3> 
        <h3> Username:  {user.data.attributes.username}</h3> 
        <h3> Email:  {user.data.attributes.email}</h3> 
    </div>
  )
}

export default Profile;
