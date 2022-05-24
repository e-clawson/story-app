import React, { useState, useContext } from "react";
import { Button, Input, FormField, Label } from "../../styles";
import {useHistory} from "react-router-dom"
import { UserContext } from "../../context/user";
import { MessageContext } from "../../context/message";

const SignUpForm = () => {
  const {signup} = useContext(UserContext);
  const {setMessage} = useContext(MessageContext);
  
  const [userObj, setUserObj] = useState({
      email: "",
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      passwordConfirmation: ""
  });

  const history = useHistory()

  const handleChange = ({target: {name, value}}) => {
      setUserObj({
          ...userObj,
          [name]: value
      })
  }

  const handleSubmit = e => {
      e.preventDefault()
      if ([userObj.username, userObj.firstName, userObj.lastName, userObj.email, userObj.password, userObj.passwordConfirmation].some(val => val.trim() === "")) {
          setMessage({message: "You must fill in all the information please!", color: "red"})
      }
      const didItWork = signup({...userObj, password_confirmation: userObj.passwordConfirmation})
      if (didItWork) {
          setMessage({message: "User successfully created!", color: "green"})
          history.push("/profile")
      }
      
      
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          name="username"
          autoComplete="off"
          value={userObj.username}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          name="firstName"
          autoComplete="off"
          value={userObj.firstName}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          autoComplete="off"
          value={userObj.lastName}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          name="email"
          autoComplete="off"
          value={userObj.email}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={userObj.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="passwordConfirmation">Password Confirmation</Label>
        <Input
          type="password"
          name="passwordConfirmation"
          value={userObj.passwordConfirmation}
          onChange={handleChange}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Button type="submit">Sign Up</Button>
      </FormField>
    </form>
  );
}

export default SignUpForm;
