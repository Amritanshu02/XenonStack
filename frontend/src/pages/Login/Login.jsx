import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        // event.prevetDefault();
        axios.post('http://localhost:8000/login', { name, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success")
                    navigate('/')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div id="Login-Container">
            <div id="Login-Wrapper">
                <h1 id="Login-Title">SIGN IN</h1>
                <form id="Login-Form" onSubmit={handleSubmit}>
                    <input placeholder="username" onChange={(event) => setName(event.target.value)} />
                    <input placeholder="password" onChange={(event) => setPassword(event.target.value)} />
                    <button id="Login-Button">LOGIN</button>
                    <Link id="Login-Link">DOESN'T REMEMBER THE PASSOWRD?</Link>
                    <Link id="Login-Link" to="/register">CREATE A NEW ACCOUNT</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;