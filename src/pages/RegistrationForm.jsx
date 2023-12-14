import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock ,FaTimes,FaCheck} from 'react-icons/fa';
import axios from "axios";
import"./Registration.css";
export default function RegistrationForm() {

  const [userFirstName, setuserFirstName] = useState("");
  const [userLastName, setuserLastName] = useState("");
  const [userName, setuserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [errors, setErrors] = useState({});
 
  const handleSave = async (e) => {
    e.preventDefault();
  
    let error = '';
    if (userFirstName === '') error = error + 'Name ,';
    if (userLastName === '') error = error + 'Last Name ,';
    if (userName === '') error = error + 'Email ,';
    if (userPassword === '') error = error + 'Password ,';
  
    if (error.length > 0) {
      error = error.substring(0, error.length - 1) + ' can not be blank';
      alert(error);
      return;
    }
  
    const data = {
      userFirstName: userFirstName,
      userLastName: userLastName,
      userName: userName,
      userPassword: userPassword
    };
  
    const validationErrors = validate(data);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        const result = await axios.post("http://localhost:4830/registerNewUser", data);
        console.log(result); // Log the response to the console
  
        if (result.data.success) {
          clear();
          alert("Successfully registered");
        } else {
          alert("Registration success");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(validationErrors);
    }
  };
  

  const clear = () => {
    setuserFirstName("");
    setuserLastName("");
    setuserName("");
    setuserPassword("");
    setErrors({});
  };

  function validate(data) {
    let errors = {};

    if (!data.userFirstName.trim()) {
      errors.userFirstName = "First Name is required";
    }

    if (!data.userLastName.trim()) {
      errors.userLastName = "Last Name is required";
    }
    if (!data.userName.trim()) {
      errors.userName = "Last Name is required";
    }
    

    if (!data.userPassword.trim()) {
      errors.userPassword = "Password is required";
    } else if (data.userPassword.length < 3) {
      errors.userPassword = "Password must be at least 3 characters";
    }

    return errors;
  }

  return (
    <Fragment>
    <div className="container-fluid p-0">
      <div className="row m-0">
        {/* Image Section (Left Side) */}
        <div className="col-md-6 p-0">
          <img
            alt="pizza logo"
            src="https://www.engiel.com/wp-content/uploads/2019/05/GIF-cappuccino-2.gif"
            className="w-100 h-100"
            style={{ objectFit: 'cover', minHeight: '100vh' }}
          />
        </div>

        {/* Form Section (Right Side) */}
        <div className="col-md-6 p-0 d-flex align-items-center">
          <div className="card w-100">
            <div className="card-body p-md-2">
              <form className="mx-2 mx-md-4">
                <div className="mb-3 mt-4">
                  <FaUser className="me-3" />
                  <label htmlFor="name" className="form-label">
                    FirstName
                  </label>
                  <input
                    type="text"
                    id="userFirstname"
                    className={`form-control ${userFirstName.length >= 5 ? 'is-valid' : 'is-invalid'}`}
                    onChange={(e) => setuserFirstName(e.target.value)}
                    value={userFirstName}
                    placeholder="Name"
                  />
                  {userFirstName.length < 5 && (
                    <small className="text-danger">Name must be at least 5 characters</small>
                  )}
                </div>
                <div className="mb-3 mt-4">
                  <FaUser className="me-3" />
                  <label htmlFor="name" className="form-label">
                    LastName
                  </label>
                  <input
                    type="text"
                    id="userLastName"
                    className={`form-control ${userLastName.length >= 5 ? 'is-valid' : 'is-invalid'}`}
                    onChange={(e) => setuserLastName(e.target.value)}
                    value={userLastName}
                    placeholder="Name"
                  />
                  {userFirstName.length < 5 && (
                    <small className="text-danger">Name must be at least 5 characters</small>
                  )}
                </div>

                <div className="mb-3 mt-4">
                  <FaUser className="me-3" />
                  <label htmlFor="name" className="form-label">
                    userName
                  </label>
                  <input
                    type="text"
                    id="userName"
                    className={`form-control ${userName.length >= 5 ? 'is-valid' : 'is-invalid'}`}
                    onChange={(e) => setuserName(e.target.value)}
                    value={userName}
                    placeholder="Name"
                  />
                  {userFirstName.length < 5 && (
                    <small className="text-danger">Name must be at least 5 characters</small>
                  )}
                </div>
               
                
                <div className="mb-4">
                  <FaLock className="me-3" />
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${userPassword.length >= 3 ? 'is-valid' : 'is-invalid'}`}
                    onChange={(e) => setuserPassword(e.target.value)}
                    value={userPassword}
                    placeholder="Enter Password"
                  />
                  {userPassword.length < 3 && (
                    <small className="text-danger">Password must be at least 3 characters</small>
                  )}
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={(e) => handleSave(e)}
                  >
                    Register
                  </button>
                  &nbsp;
                  <Link
                    to="/logins"
                    className="btn btn-info btn-lg btn-block"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
}
    