import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
    <div className=" nav-container">
        <nav className="navbar navbar-expand-lg navbar-light container">
            <ul className="navbar-nav mr-auto">
                < li className="nav-item" >
                    <NavLink to="/" className="nav-link">Characters</NavLink>
                </li >
                <li className="nav-item">
                    <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/locations" className="nav-link">Locations</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/watch" className="nav-link">Watch List</NavLink>
                </li>
            </ul >

        </nav >
    </div>

)

