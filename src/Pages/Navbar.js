import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Images/logo.png';

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
			<div className="nav-logo-container">
				<img src={logo} className="logo" alt="logo"/>
			</div>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						HOME 
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/user" className="nav-link" onClick={closeMenu}>
						USER
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/developer" className="nav-link" onClick={closeMenu}>
						DEVELOPER
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;