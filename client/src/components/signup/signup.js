import React from "react";
import "./signup.css";

function SignupForm({ handleInputChange, handleFormSubmit }) {
    return (
        <div>


            <h1 className="page-title">Sign Up</h1>

            <div className="auth-form">

                <form className="form-group">
                    <h3>Name :</h3>

                    <input className="form-control form-input-style" id="name" autoComplete="on" type="text" placeholder="Name" onChange={handleInputChange}/>

                    <h3>Email :</h3>

                    <input className="form-control form-input-style"id="email" autoComplete="on" type="text" placeholder="Email" onChange={handleInputChange}/>
                    <h3>Password :</h3>

                    <input className="form-control" id="password" autoComplete="on" type="password" placeholder="Password (6 characters minimum)" onChange={handleInputChange}/>
                    <h3>Re-enter password :</h3>
                    <input className="form-control" id="password2" autoComplete="on" type="password" placeholder="Password (6 characters minimum)" onChange={handleInputChange}/>
                    <input className="sub" type="submit" value="Submit" onClick={handleFormSubmit} />
                </form>

            </div>
        </div>
    )
}

export default SignupForm;