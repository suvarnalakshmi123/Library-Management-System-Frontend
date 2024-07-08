import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./App.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Signup() {
    const [goToLogin, setGotoLogin] = useState(false);
    const initialValues = {
        username: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false); // Remove this line
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let errors = { ...formErrors };
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        const capitalLetterRegex = /[A-Z]/;
        const specialCharacterRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

        if (name === 'username') {
            errors.username = value ? '' : 'Username is required!';
        } else if (name === 'email') {
            if (!value) {
                errors.email = 'Email is required!';
            } else if (!emailRegex.test(value)) {
                errors.email = 'This is not a valid email format!';
            } else {
                errors.email = '';
            }
        } else if (name === 'phone') {
            if (!value) {
                errors.phone = 'Phone number is required!';
            } else if (value.length !== 10) {
                errors.phone = 'Phone number must contain exactly 10 digits';
            } else {
                errors.phone = '';
            }
        } else if (name === 'address') {
            errors.address = value ? '' : 'Address is required!';
        } else if (name === 'password') {
            if (!value) {
                errors.password = 'Password is required!';
            } else if (value.length < 6) {
                errors.password = 'Password must be more than 6 characters';
            } else if (value.length > 10) {
                errors.password = 'Password cannot exceed more than 10 characters';
            } else if (!capitalLetterRegex.test(value)) {
                errors.password = 'Password must contain at least one capital letter';
            } else if (!specialCharacterRegex.test(value)) {
                errors.password = 'Password must contain at least one special character';
            } else {
                errors.password = '';
            }
        } else if (name === 'confirmPassword') {
            if (!value) {
                errors.confirmPassword = 'Confirm password is required!';
            } else if (value !== formValues.password) {
                errors.confirmPassword = 'Passwords do not match. Try again.';
            } else {
                errors.confirmPassword = '';
            }
        }

        setFormErrors(errors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // setIsSubmit(true); // Remove this line

        validateField('username', formValues.username);
        validateField('email', formValues.email);
        validateField('phone', formValues.phone);
        validateField('address', formValues.address);
        validateField('password', formValues.password);
        validateField('confirmPassword', formValues.confirmPassword);

        const hasErrors = Object.values(formErrors).some(error => error !== '');
        const hasEmptyFields = Object.values(formValues).some(value => value === '');

        if (hasErrors || hasEmptyFields) {
            setFormErrors({
                username: formValues.username ? '' : 'Username is required!',
                email: formValues.email ? '' : 'Email is required!',
                phone: formValues.phone ? '' : 'Phone number is required!',
                address: formValues.address ? '' : 'Address is required!',
                password: formValues.password ? '' : 'Password is required!',
                confirmPassword: formValues.confirmPassword ? '' : 'Confirm password is required!',
            });
            return;
        }

        console.log("Submitted successfully", formValues);
        setGotoLogin(true); // Navigate to login page if no errors
    };

    if (goToLogin) {
        return <Navigate to="/" />;
    }

    const toggleShowPassword1 = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowPassword2 = () => {
        setShowPassword1(!showPassword1);
    };

    return (
        <div className="bg-Img">
            <div className="container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formValues.username}
                            onChange={handleChange}
                          // required
                        />
                        {formErrors.username && <p className="error">{formErrors.username}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            // required
                        />
                        {formErrors.email && <p className="error">{formErrors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                            // required
                        />
                        {formErrors.phone && <p className="error">{formErrors.phone}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formValues.address}
                            onChange={handleChange}
                            // required
                        />
                        {formErrors.address && <p className="error">{formErrors.address}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                            // required
                        />
                        <span onClick={toggleShowPassword1}>
                            {showPassword ? <FaEye className="eye-icon" /> : <FaEyeSlash className="eye-icon" />}
                        </span>
                        {formErrors.password && <p className="error">{formErrors.password}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type={showPassword1 ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                            // required
                        />
                        <span onClick={toggleShowPassword2}>
                            {showPassword1 ? <FaEye className="eye-icon" /> : <FaEyeSlash className="eye-icon" />}
                        </span>
                        {formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="sign-up-button">Sign Up</button>
                        <p className="text">Already have an account?</p>
                        <button type="button" onClick={() => setGotoLogin(true)} className="Login-button">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
