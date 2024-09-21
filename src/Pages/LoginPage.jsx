import React, { useState } from "react";
import Nav from '../Navbar/Navbar';
import Fotter from '../Componenet/Fotter/Fotter';
import './Login.css';

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add login functionality here
        console.log(formData);
    };

    return (
        <>
            <Nav />
            <div className="login-main">

            <div className="login-container">
                <div className="login-box">
                    <h2 className="login-h2">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                            <label>Username</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <label>Password</label>
                        </div>
                        <button type="submit" className="button1" >Login</button>
                    </form>
                </div>
            </div>
                                </div>
            <Fotter />
        </ >
    );
}

export default LoginPage;
