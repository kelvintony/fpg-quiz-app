import React, { useState, useEffect } from 'react';
import fpgLogo from '../assets/logo-fo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('userProfile')));

	useEffect(
		() => {
			setUser(JSON.parse(localStorage.getItem('userProfile')));
		},
		[ location ]
	);

	const handleLogout = () => {
		localStorage.clear();
		setUser(null);
		navigate('/');
		// window.location = '/';
	};
	return (
		<nav class='login-navbar'>
			<img src={fpgLogo} alt='pix-1' />
			{user ? (
				<div class='login-navbar-a'>
					<p>{user.name}</p>
					<Link className='link-btn' to='/'>
						<button class='login-navbar-btn' onClick={handleLogout}>
							logout
						</button>
					</Link>
				</div>
			) : (
				<Link className='link-btn' to='/'>
					<div class='login-navbar-a'>
						<button class='login-navbar-btn'>Get started</button>
					</div>
				</Link>
			)}
		</nav>
	);
};

export default Navbar;
