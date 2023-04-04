import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import firebaseApp from "./firebase";
import TextField from "@mui/material/TextField";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }


  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1>Log In</h1>
      <form
        onSubmit={handleSubmit}
        className="m-4 flex flex-col w-1/4 min-w-[300px]"
      >
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Email"
          name="email"
          style={{ marginBottom: "1rem" }}
        />

        <TextField
          required
          fullWidth
          style={{ marginBottom: "1rem" }}
          type="password"
          id="outlined-required"
          label="Password"
          name="password"
        />

        <button type="submit" className="p-[10px] text-white rounded-[4px] bg-[#1989F1]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
