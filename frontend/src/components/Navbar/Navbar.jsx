import React from 'react';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css";

const Navbar = () => {
    return (
        <div className="Container">
            <div className="Wrapper">
                <div className="Left">
                    <div className="Language">EN</div>
                    <div className="SearchContainer">
                        <input placeholder="search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </div>
                </div>
                <div className="Center"><div className="Logo">Shopsy</div></div>
                <div className="Right">
                    <div className="MenuItem"><Link id="Link" to="/register">REGISTER</Link></div>
                    <div className="MenuItem"><Link id="Link" to="/login">SIGN IN</Link></div>
                    <div className="MenuItem"><Link id="Link" to="/contact">CONTACT US</Link></div>
                    <div className="MenuItem">REGISTER</div>
                    <div className="MenuItem">SIGN IN</div>
                    <Link to="/cart">
                        <div className="MenuItem">
                            <Badge badgeContent={1} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;