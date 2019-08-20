import React, { useState } from 'react';
import LS from './../helpers/localDB';
import Wishlist from './wishlist';

const wishlistBtn = {
	display: 'inline-block',
    position: 'absolute',
    width: '150px',
    right: '10px',
    backgroundColor : '#44d8b8'
}

export default (props) => {

	const [opened, toggleOpen] = useState(false);

	return (
		<div className="top-bar">
			<div className="app-title"><span style={{fontWeight:'200'}}>Movie</span> Spot</div>
			<button className="btn-primary" style={wishlistBtn} onClick={() => toggleOpen(!opened)}>Wishlist </button>
			{opened && <Wishlist />}
		</div>
	);
}
