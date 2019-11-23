import React from "react";
import "./login-form.css";

function LoginForm({ handleEmailChange, handlePasswordChange, handleFormSubmit }) {
    return (
        <form className="auth-form">
            <h3>Email :</h3>
            <input className="form-control form-input-style" autoComplete="on" placeholder="  Email" onChange={handleEmailChange} required />
            <h3>Password :</h3>
            <input className="form-control form-input-style" autoComplete="on" type="password" placeholder="  Password" onChange={handlePasswordChange} required />
            <input className="sub" type="submit" value="Submit" onClick={handleFormSubmit} />
        </form>
    )
}

export default LoginForm;