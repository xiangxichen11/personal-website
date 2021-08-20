import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="Nav-header">
            <div className="Nav-div">
                <nav className="Nav-left">
                    <NavLink to="/personal-website" exact className="Home" >
                        Home
                    </NavLink>
                </nav>
                <nav className="Nav-right">
                        <NavLink to="/personal-website/about" className="About">
                            About
                        </NavLink>
                        <NavLink to="/personal-website/projects" className="Projects">
                            Projects
                        </NavLink>
                        <NavLink to="/personal-website/contact" className="Contact">
                            Contact
                        </NavLink>
                </nav>
            </div>
        </header>
    )
}