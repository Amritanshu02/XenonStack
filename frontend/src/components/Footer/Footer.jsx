import React from 'react';
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from "@material-ui/icons";
import "../Footer/Footer.css";

const Footer = () => {
    return (
        <div id="Footer-Container">
            <div id="Footer-Left">
                <h1 id="Footer-Logo">Shopsy</h1>
                <p id="Footer-Desc">There are many variations of passages of Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, ullam.</p>
                <div id="Footer-SocialContainer">
                    <div id="Footer-SocialIcon" color="3B5999">
                        <Facebook />
                    </div>
                    <div id="Footer-SocialIcon" color="E4405F">
                        <Instagram />
                    </div>
                    <div id="Footer-SocialIcon" color="55ACEE">
                        <Twitter />
                    </div>
                    <div id="Footer-SocialIcon" color="E60023">
                        <Pinterest />
                    </div>
                </div>
            </div>

            <div id="Footer-Center">
                <h3 id="Footer-Title">Useful Links</h3>
                <ul id="Footer-List">
                    <li id="Footer-ListItem">Home</li>
                    <li id="Footer-ListItem">Cart</li>
                    <li id="Footer-ListItem">Men Fashion</li>
                    <li id="Footer-ListItem">Women Fashion</li>
                    <li id="Footer-ListItem">Accessories</li>
                    <li id="Footer-ListItem">My Account</li>
                    <li id="Footer-ListItem">Order Tracking</li>
                    <li id="Footer-ListItem">Wishlist</li>
                    <li id="Footer-ListItem">Terms</li>
                </ul>
            </div>

            <div id="Footer-Right">
                <h3 id="Footer-Title">Contact</h3>
                <div id="Footer-ContactItem">
                    <Room style={{ marginRight: "10px" }} /> 622 Dixie Path, South Tobinchester 98336
                </div>
                <div id="Footer-ContactItem">
                    <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
                </div>
                <div id="Footer-ContactItem">
                    <MailOutline style={{ marginRight: "10px" }} /> contact@gmail.com
                </div>
                <img id="Footer-Payment" src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </div>
        </div>
    )
}

export default Footer;