import React from 'react';
import "./Register.css";

const Register = () => {
    return (
        <div id="Register-Container">
            <div id="Register-Wrapper">
                <h1 id="Register-Title">CREATE AN ACCOUNT</h1>
                <form id="Register-Form">
                    <input placeholder="name" />
                    <input placeholder="last name" />
                    <input placeholder="username" />
                    <input placeholder="email" />
                    <input placeholder="password" />
                    <input placeholder="confirm password" />
                    <div id="Register-Agreement">
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </div>
                    <button id="Register-Button">CREATE</button>
                </form>
            </div>
        </div>
    )
}

export default Register;