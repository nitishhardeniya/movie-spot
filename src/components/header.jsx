import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import styled ,{ withTheme } from 'styled-components';
import { headerBackground } from './../themes';
import { useTheme } from './../ThemeContext';
import Switch from "react-switch";
import Wishlist from './wishlist';
import {Search} from '../components/filters';
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
			<div className="app-title"><span style={{fontWeight:'200'}}>Movie</span> Spot</div>
			<div className="header-filler"></div>
			{props.location.pathname !== '/' ? <div><i className="material-icons mi-color back-btn" onClick={() => goBack()}>keyboard_backspace</i></div> :
				<><Search />
				<div className="mode-switch">
					<span className="font-grey">Dark Mode</span>
					<Switch 
						onChange={()=> toggle.toggleTheme()} 
						checked={props.theme.mode === 'dark'}
						onColor="#86d3ff"
						onHandleColor="#2693e6"
						handleDiameter={20}
						uncheckedIcon={false}
						checkedIcon={false}
						boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
						activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
						height={15}
						width={35}
						className="react-switch"
						id="material-switch"
					/>
				</div></>
			}
			<div><i className="material-icons mi-color wl-btn" title="My wishlist" onClick={() => toggleOpen(!opened)}>favorite</i></div>
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