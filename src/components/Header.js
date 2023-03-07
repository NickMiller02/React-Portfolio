// Imports - REACT
import React from 'react';

// Imports - Pages to render
import Nav from './Nav.js';

// Header function
function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div>
				<h2>Nick's React Portfolio</h2>
			</div>
			<div>
				<Nav
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Nav>
			</div>
		</header>
	);
}

export default Header;