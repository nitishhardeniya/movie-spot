import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import Wishlist from './wishlist';
//import { getMyWishlist } from './../actions/wishlist';

const Header = (props) => {

	const [opened, toggleOpen] = useState(false);

	const goBack = () => {
		props.history.goBack();
	}

	return (
		<div className="top-bar">
			{props.location.pathname !== '/' && <i className="material-icons mi-color back-btn" onClick={() => goBack()}>keyboard_backspace</i>}
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


export default connect(mapStateToProps,null)(withRouter(Header));