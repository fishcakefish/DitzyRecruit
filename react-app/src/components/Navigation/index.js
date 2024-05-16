import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='nav-background'>
		<ul className='nav-bar'>
			<li className='logo-li'>
				<NavLink exact to="/">
					<img src="/Ditzy.png" alt="Logo" className='nav-logo' />
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/apple">apple!</NavLink>
			</li>
			<li>
				<NavLink exact to="/banana">banana!</NavLink>
			</li>
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>
		</div>
	);
}

export default Navigation;
