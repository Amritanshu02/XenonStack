import React from 'react';
import "../Register/Register.css";

const Register = () => {
    return (
        <div id="Container">
            <div id="Wrapper">
                <h1 id="Title">CREATE AN ACCOUNT</h1>
                <form id="Form">
                    <input placeholder="name" />
                    <input placeholder="last name" />
                    <input placeholder="username" />
                    <input placeholder="email" />
                    <input placeholder="password" />
                    <input placeholder="confirm password" />
                    <div id="Agreement">
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </div>
                    <button id="Button">CREATE</button>
                </form>
            </div>
        </div>
    )
}

export default Register;