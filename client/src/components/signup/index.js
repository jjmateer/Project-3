import React from "react";
import "./style.css";

function SignupForm({ email, password, handleInputChange, handleFormSubmit }) {
    return (
        <div>
            <form className="form-group">
                <h1>Sign up</h1>
                <input className="form-control" placeholder="Email" value={email} name="loginq" onChange={handleInputChange} required />
                <input className="form-control" placeholder="Password" value={password} name="loginq" onChange={handleInputChange} required />
                <input type="submit" value="Submit" onClick={handleFormSubmit}/>
            </form>
        </div>
    )
}

export default SignupForm;