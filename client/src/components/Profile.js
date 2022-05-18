import React, {useContext} from 'react';
import { UserContext } from './context/user';
import { MessageContext } from './context/message';
import { Redirect } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(UserContext)
    if (!user) return <Redirect to="/login" />
  
    return (
    <div> 
        <h2>{user.username} Profile</h2>
    </div>
  )
}

export default Profile;
