import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div id="Login-Container">
            <div id="Login-Wrapper">
                <h1 id="Login-Title">SIGN IN</h1>
                <form id="Login-Form">
                    <input placeholder="username" />
                    <input placeholder="password" />
                    <button id="Login-Button">LOGIN</button>
                    <Link id="Login-Link">DOESN'T REMEMBER THE PASSOWRD?</Link>
                    <Link id="Login-Link" to="/register">CREATE A NEW ACCOUNT</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;