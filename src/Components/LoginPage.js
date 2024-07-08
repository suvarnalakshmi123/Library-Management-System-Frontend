import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
    const loginFields = {
        Username: "",
        Password: ""
    };

    const [fieldValues, setFieldValues] = useState(loginFields);
    const [fieldErrors, setFieldErrors] = useState({});
    const [isLoginSubmit, setIsLoginSubmit] = useState(false);
    const [gotoSignup, setGotoSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleValueChange = (e) => {
        const { name, value } = e.target;
        setFieldValues({ ...fieldValues, [name]: value });
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let errors = { ...fieldErrors };

        if (name === 'Username') {
            errors.Username = value ? '' : 'Username is required!';
        } else if (name === 'Password') {
            if (!value) {
                errors.Password = 'Password is required!';
            } else if (value.length < 6) {
                errors.Password = 'Password must be more than 6 characters';
            } else if (value.length > 10) {
                errors.Password = 'Password cannot exceed more than 10 characters';
            } else {
                errors.Password = '';
            }
        }

        setFieldErrors(errors);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        // Validate all fields before submission
        validateField('Username', fieldValues.Username);
        validateField('Password', fieldValues.Password);

        const hasErrors = Object.values(fieldErrors).some(error => error !== '');
        const hasEmptyFields = Object.values(fieldValues).some(value => value === '');

        if (hasErrors || hasEmptyFields) {
            setFieldErrors({
                Username: fieldValues.Username ? '' : 'Username is required!',
                Password: fieldValues.Password ? '' : 'Password is required!'
            });
            return;
        }

        setIsLoginSubmit(true);
    };

    if (gotoSignup) {
        return <Navigate to="/Signup" />
    }
    if(isLoginSubmit) {
        return <Navigate to="/AdminPg"/>
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-img">
            <div className="login-box">
                <h1>Login Page</h1>
                <form onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input 
                            type="text" 
                            name="Username" 
                            placeholder="Username" 
                            value={fieldValues.Username} 
                            onChange={handleValueChange} 
                        />
                        {fieldErrors.Username && <p className="errors">{fieldErrors.Username}</p>}
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name="Password" 
                            placeholder="Password" 
                            value={fieldValues.Password} 
                            onChange={handleValueChange} 
                        />
                        <span onClick={toggleShowPassword}>
                            {showPassword ? <FaEye className="eye-icon" /> : <FaEyeSlash className="eye-icon" />}
                        </span>
                        {fieldErrors.Password && <p className="errors">{fieldErrors.Password}</p>}
                    </div>
                    <div className="form-group">
                        <button className="login-button">Login</button> <br />
                        A New User? <button 
                            type="button"
                            onClick={() => setGotoSignup(true)} 
                            className="Sign-up-button">
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
