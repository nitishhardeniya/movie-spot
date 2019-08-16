import React from 'react';
import LS from './../helpers/localDB';

const wishlistBtn = {
	display: 'inline-block',
    position: 'absolute',
    width: '150px',
    right: '10px'
}

const mywishList = () =>{
	let currentWL = LS.getData("wishlist");
	console.log(currentWL,"NH")
}

export default (props) => {
	return (
		<div className="top-bar">
			<div className="app-title"><span style={{fontWeight:'200'}}>Movie</span> Spot</div>
			{/*<button className="btn-primary" style={wishlistBtn} onClick={()=>mywishList()}>Go to Wishlist </button>*/}
		</div>
	);
}
