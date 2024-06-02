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
						<NavLink exact to="/DitzyRecruit/">Home</NavLink>
					</li>
					<li>
						<NavLink exact to="/DitzyRecruit/models">Models</NavLink>
					</li>
					<li>
						<NavLink exact to="/DitzyRecruit/about">About</NavLink>
					</li>
					<li>
						<NavLink exact to="/DitzyRecruit/contact">Contact</NavLink>
					</li>
					<li>
						<NavLink exact to="/DitzyRecruit/blog">Blog</NavLink>
					</li>
				</div>
				<li className='logo-li'>
					<NavLink exact to="/DitzyRecruit/">
						<img src={DitzyImage} alt="Logo" className='nav-logo' />
					</NavLink>
				</li>
				<div className='nav-contacts-desktop'>
					<li>
						<NavLink exact to="/DitzyRecruit/instagram">Instagram</NavLink>
					</li>
					<li className='connect-btn'>
						<NavLink exact to="/DitzyRecruit/connect">Connect</NavLink>
					</li>
				</div>
			</ul>
		</div>
	);
}

export default Navigation;
