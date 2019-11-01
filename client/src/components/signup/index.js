import React from "react";
import "./style.css";

function SignupForm({ handleEmailChange, handlePasswordChange, handleFormSubmit }) {
    return (
        <div>
            <form className="form-group">
                <h1>Sign up</h1>
                <input className="form-control" placeholder="Email" onChange={handleEmailChange} required />
                <input className="form-control" placeholder="Password" onChange={handlePasswordChange} required />
                <input type="submit" value="Submit" onClick={handleFormSubmit} />
            </form>
        </div>
    )
}

export default SignupForm;