import React, {useContext} from 'react';
import { UserContext } from '../../context/user';
// import { MessageContext } from '../../context/message';
import { Redirect } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(UserContext)
    if (!user) return <Redirect to="/login" />
  
    return (
    <div> 
        <h1>{user.username} Profile</h1>
        <h2> User Information: </h2> <br />
        <h3> First Name:  {user.first_name}</h3> 
        <h3> Last Name:  {user.last_name}</h3> <br />
        <h3> Prompts: </h3> <br />

      
    </div>
  )
}

export default Profile;
