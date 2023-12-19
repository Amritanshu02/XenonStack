import React from 'react';
import "./Register.css";
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        axios.post('http://localhost:8000/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div id="Register-Container">
            <div id="Register-Wrapper">
                <h1 id="Register-Title">CREATE AN ACCOUNT</h1>
                <form id="Register-Form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="name" name="firstname" />
                    <input type="text" placeholder="last name" name="lastname" />
                    <input type="text" placeholder="username" name="username" onChange={(event) => setName(event.target.value)} />
                    <input type="email" placeholder="email" name="email" onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" placeholder="password" name="password" onChange={(event) => setPassword(event.target.value)} />
                    <input type="password" placeholder="confirm password" name="confirmpassword" />
                    <p>
                        Already have an account? <Link to="/login">SignIn</Link>
                    </p>
                    <div id="Register-Agreement">
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </div>
                    <br />
                    <button id="Register-Button" type="submit">CREATE</button>
                </form>
            </div>
        </div>
    )
}

export default Register;