import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => (
    <footer class="page__footer footer">
        <div className="nav-container container">
            <p className="logo">
                <NavLink to="/" className="nav-link">
                    R&M Wiki
                </NavLink>
            </p>
            <nav className="navbar-footer">
                <ul className="nav">
                    <li className="nav-footer-item">
                        <a href="#" className="nav-link">
                            Terms of use
                        </a>
                    </li>
                    <li className="nav-footer-item">
                        <a href="#" className="nav-link">
                            Privacy / Security
                        </a>
                    </li>
                    <li className="nav-footer-item">
                        <a href="#" className="nav-link">
                            Corporate site
                        </a>
                    </li>
                </ul>
            </nav>
            <p className="copy">&copy; 2021 R&M Wiki. All rights reserved.</p>
        </div>
    </footer>
)
