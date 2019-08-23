import React, { useState } from 'react';
import { connect } from 'react-redux';

import Wishlist from './wishlist';
//import { getMyWishlist } from './../actions/wishlist';

const Header = (props) => {

	const [opened, toggleOpen] = useState(false);

	/*if(props.wishlist && Object.keys(props.wishlist).length == 0){
		props.getMyWishlist();	
	}*/
	

	return (
		<div className="top-bar">
			<div className="app-title"><span style={{fontWeight:'200'}}>Movie</span> Spot</div>
			<i className="material-icons mi-color wl-btn" title="My wishlist" onClick={() => toggleOpen(!opened)}>favorite</i>
			{opened && <Wishlist data={props.wishlist}/>}
		</div>
	);
}

/*const mapDispatchToProps = {
	getMyWishlist
}*/

const mapStateToProps = (state) => ({
	wishlist: state.wishlist
});


export default connect(mapStateToProps,null)(Header);