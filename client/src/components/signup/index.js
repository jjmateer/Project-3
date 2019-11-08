import React from "react";
import "./style.css";

function SignupForm({ handleEmailChange, handlePasswordChange, handleFormSubmit }) {
    return (
        <div>


            <h1 className="page-title">Sign Up</h1>

            <div className="content-wrappershort">

                <form className="form-group">

                    <h3>Email :</h3>

                    <input className="form-control form-input-style" autoComplete="on" type="text" placeholder="  Email" onChange={handleEmailChange} required />
                    <h3>Password :</h3>

                    <input className="form-control form-input-style" autoComplete="on" type="password" placeholder="  Password" onChange={handlePasswordChange} required />
                    <input className="sub" type="submit" value="Submit" onClick={handleFormSubmit} />
                </form>

            </div>
        </div>
    )
}

export default SignupForm;