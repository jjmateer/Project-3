import React from "react";
import "./style.css";

function LoginForm({ handleEmailChange, handlePasswordChange, handleFormSubmit }) {
    return (
        <div>
            <form className="form-group">
                <h3>Email :</h3>
                <input className="form-control" placeholder="  Email" onChange={handleEmailChange} required />
                <h3>Password :</h3>

                <input className="form-control" type="password" placeholder="  Password" onChange={handlePasswordChange} required />
                <input className="sub" type="submit" value="Submit" onClick={handleFormSubmit} />
            </form>
        </div>
    )
}

export default LoginForm;