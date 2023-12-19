import React from 'react';
import "./Contact.css";
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState();
    const [comment, setComment] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        axios.post('http://localhost:8000/contact', { name, comment })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div id="Contact-Container">
            <div id="Contact-Wrapper">
                <h1 id="Contact-Title">CONTACT US</h1>
                <form id="Contact-Form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" name="username" onChange={(event) => setName(event.target.value)} />
                    <textarea placeholder="Comment" name="comment" onChange={(event) => setComment(event.target.value)} />

                    <button id="Contact-Button" type="submit">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Register;