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
            <p className="copy">&copy; 2021 R&M Wiki. All rights reserved.</p>
        </div>
    </footer>
)
