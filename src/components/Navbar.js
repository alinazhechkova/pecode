import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const openMenu = () => {
        document.body.classList.toggle('fixed')
        setActive(!active)
    }
    const closeMenu = () => {
        document.body.classList.remove('fixed')
        setActive(false)
    }

    return (
        <header className="page__header header">
            <div className="nav-container container">
                <p className="logo">
                    <NavLink to="/" className="nav-link">
                        R&M Wiki
                    </NavLink>
                </p>
                <button className="nav-open-btn" onClick={openMenu}>
                    <span
                        className={`nav-open-btn__line ${
                            active ? 'active' : ''
                        }`}
                    ></span>
                </button>
                <nav className={`navbar ${active ? 'active' : ''}`}>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                onClick={closeMenu}
                                className="nav-link"
                            >
                                Characters
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/episodes"
                                onClick={closeMenu}
                                className="nav-link"
                            >
                                Episodes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/locations"
                                onClick={closeMenu}
                                className="nav-link"
                            >
                                Locations
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/watch"
                                onClick={closeMenu}
                                className="nav-link"
                            >
                                Watch List
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
