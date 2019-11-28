import React from "react";
import "./login-form.css";

function LoginForm({ handleInputChange, handleFormSubmit }) {
    return (
        <div className="login-div">
            <form className="login-form">
                <h3>Email :</h3>
                <input className="form-control form-input-style" id="email" autoComplete="on" placeholder="  Email" onChange={handleInputChange} required />
                <h3>Password :</h3>
                <input className="form-control form-input-style" id="password" autoComplete="on" type="password" placeholder="  Password " onChange={handleInputChange} required />
                <input className="sub" id="submit" type="submit" value="Submit" onClick={handleFormSubmit} />
            </form>
        </div>
    )
}

export default LoginForm;