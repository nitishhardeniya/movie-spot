import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import styled ,{ withTheme } from 'styled-components';
import { headerBackground } from './../themes';
import { useTheme } from './../ThemeContext';

import Wishlist from './wishlist';
//import { getMyWishlist } from './../actions/wishlist';

const Header = (props) => {
	const [opened, toggleOpen] = useState(false);
	const toggle = useTheme();

	const goBack = () => {
		props.history.goBack();
	}

	const TopBar = styled.div`
		background-color: ${headerBackground}
	`;

	return (
		<TopBar className="top-bar">
			{props.location.pathname !== '/' && <i className="material-icons mi-color back-btn" onClick={() => goBack()}>keyboard_backspace</i>}
			<div className="app-title"><span style={{fontWeight:'200'}}>Movie</span> Spot</div>
			<div onClick={()=> toggle.toggleTheme() }> {props.theme.mode === 'light' ? 'Switch theme dark': 'Switch theme light'}</div>
			<i className="material-icons mi-color wl-btn" title="My wishlist" onClick={() => toggleOpen(!opened)}>favorite</i>
			{opened && <Wishlist data={props.wishlist}/>}
		</TopBar>
	);
}

/*const mapDispatchToProps = {
	getMyWishlist
}*/

const mapStateToProps = (state) => ({
	wishlist: state.wishlist
});


export default connect(mapStateToProps,null)(withTheme(withRouter(Header)));