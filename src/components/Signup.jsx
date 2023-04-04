import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import firebaseApp from "./firebase";
import TextField from "@mui/material/TextField";

const Signup = () => {
  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      firebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value);      
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
      return <Navigate to="/dashboard" />;
  }
  return (
    <div>
    <div className="flex justify-center items-center h-screen flex-col">

      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="m-4 flex flex-col w-1/4 min-w-[300px]">
      <div className="grid grid-cols-2 gap-4">
          <TextField
            required
            id="outlined-required"
            label="First Name"
            name="firstName"
            className="grid-col-1"
          />
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            name="lastName"
            className="grid-col-2"
          />
          <div className="col-span-2">
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Email"
              name="email"

            />
          </div>
          <div className="col-span-2">
            <TextField
              required
              fullWidth
              type="password"
              id="outlined-required"
              label="Password"
              name="password"

            />
          </div>
        </div>
{/* 
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" /> */}
        <button type="submit" className="p-[10px] mt-4 text-white rounded-[4px] bg-[#1989F1]">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;


