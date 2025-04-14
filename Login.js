import React, { useState } from "react";
import "./Login.css"; // Import the CSS for styling

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Validate the form
    const validateForm = () => {
        const newErrors = {};
        if (!credentials.username) newErrors.username = "Username is required.";
        if (!credentials.password) newErrors.password = "Password is required.";
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Logging in with:", credentials);
            alert("Logged in successfully!");
            // Clear the form and errors if needed
            setCredentials({ username: "", password: "" });
            setErrors({});
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    {/* Username */}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                        {errors.username && <span className="error">{errors.username}</span>}
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="submit-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
