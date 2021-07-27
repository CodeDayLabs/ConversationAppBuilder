import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Images/logo.jpg';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
        <img src={logo} className="logo" alt="logo"/>
			<Link to="/" className="nav-logo">
				ConvaBuild
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/developer" className="nav-link" onClick={closeMenu}>
						Developer
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/user" className="nav-link" onClick={closeMenu}>
						User
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;