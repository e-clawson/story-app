import React, {useContext} from 'react';
import { UserContext } from '../../context/user';
// import { MessageContext } from '../../context/message';
import { Redirect } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(UserContext)
    console.log(user)
    if (!user?.data) return <Redirect to="/login" />
  
    return (
    <div> 
        <h1>Hello, {user.data.attributes.username}!</h1>
        <h2> User Information: </h2> <br />
        <h3> First Name:  {user.data.attributes.first_name}</h3> 
        <h3> Last Name:  {user.data.attributes.last_name}</h3> <br />
        <h3> Prompts: {user.data.attributes.prompts} </h3> <br />

      
    </div>
  )
}

export default Profile;
