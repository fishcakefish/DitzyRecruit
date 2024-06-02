import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import DitzyImage from '../../assets/images/Ditzy.png';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='nav-background'>
			<ul className='nav-bar'>
				<div className='nav-desktop'>
					<li>
						<NavLink exact to="/">Home</NavLink>
					</li>
					<li>
						<NavLink exact to="/models">Models</NavLink>
					</li>
					<li>
						<NavLink exact to="/about">About</NavLink>
					</li>
					<li>
						<NavLink exact to="/contact">Contact</NavLink>
					</li>
					<li>
						<NavLink exact to="/blog">Blog</NavLink>
					</li>
				</div>
				<li className='logo-li'>
					<NavLink exact to="/">
						<img src={DitzyImage} alt="Logo" className='nav-logo' />
					</NavLink>
				</li>
				<div className='nav-contacts-desktop'>
					<li>
						<NavLink exact to="/instagram">Instagram</NavLink>
					</li>
					<li>
						<button>
							<NavLink exact to="/connect">Connect</NavLink>
						</button>
					</li>
				</div>
			</ul>
		</div>
	);
}

export default Navigation;
