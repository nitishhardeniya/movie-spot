import React, { useState } from 'react';
import LS from './../helpers/localDB';
import Wishlist from './wishlist';

/*const wishlistBtn = {
	display: 'inline-block',
    position: 'absolute',
    //width: '150px',
    right: '25px',
    top:'25px',
    fontSize:'35px',
    cursor:'pointer'
}*/

export default (props) => {

	const [opened, toggleOpen] = useState(false);

	return (
		<div className="top-bar">
			<div className="app-title"><span style={{fontWeight:'200'}}>Movie</span> Spot</div>
			{/*<button className="btn-primary" style={wishlistBtn} onClick={() => toggleOpen(!opened)}>Wishlist </button>*/}
			<i className="material-icons mi-color wl-btn" title="My wishlist" onClick={() => toggleOpen(!opened)}>favorite</i>
			{opened && <Wishlist />}
		</div>
	);
}
