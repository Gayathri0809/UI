import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import"./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Login() {
  
  const [userName, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

   function handleSubmit() {
    //event.preventDefault();
  console.log("OK till here");
   
    const user = {
      userName: userName,
      userPassword: userPassword,
    };
    if(userName==="admin123"&&userPassword==="admin@pass"){
      alert("admin login sucessfull");
      window.location.href='/dashboard';
    }

    axios.post(`http://localhost:4830/authenticate`,user)
    .then((response)=> {
      console.log(response.data)
      console.log("success")
      alert("Succes")
      localStorage.setItem('role', response.data.user);
      localStorage.setItem('jwtToken', response.data.jwtToken);
      
      window.location.href = "/search"
      
    })
    .catch((error)=> {
      console.log(error)
    })

  console.log(user);
    
}
  


  return (
    
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      id="login"
      style={{
        backgroundImage: `url("images/fries.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="card p-4 shadow rounded"  style={{ width: "400px", backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
        <h3 className="text-success text-center mb-4">LOGIN FORM</h3>
        <form >
          <div className="mb-4" >
            
            <TextField
            sx={{width:"300px"}}
          required
          id="outlined-required"
          label="Email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>

          <div className="mb-3">
          <TextField
          sx={{width:"300px"}}
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <div className="mb-3 text-center">
            <Link to="/register" className="text-success">
              New User?
            </Link>
          </div>

          
          <Button variant="contained" onClick={handleSubmit} >LogIn</Button>

          {message && (
            <div className="mt-3">
              <span className="text-success">{message}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
export default Login;