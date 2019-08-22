import React, { useState } from 'react';
import LS from './../helpers/localDB';
import Wishlist from './wishlist';

export default (props) => {

	const [opened, toggleOpen] = useState(false);

	return (
		<div className="top-bar">
			<div className="app-title"><span style={{fontWeight:'200'}}>Movie</span> Spot</div>
			<i className="material-icons mi-color wl-btn" title="My wishlist" onClick={() => toggleOpen(!opened)}>favorite</i>
			{opened && <Wishlist />}
		</div>
	);
}
