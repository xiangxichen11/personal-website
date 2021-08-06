import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header class="Navbar-header">
            <div class="Navbar">
                <nav className="flex">
                    <NavLink to="/personal-website" exact class="Home">
                        Home
                    </NavLink>
                    <NavLink to="/personal-website/about" class="About">
                        About
                    </NavLink>
                    <NavLink to="/personal-website/projects" class="Projects">
                        Projects
                    </NavLink>
                    <NavLink to="/personal-website/contact" class="Contact">
                        Contact
                    </NavLink>
                    
                </nav>
            </div>
        </header>
    )
}