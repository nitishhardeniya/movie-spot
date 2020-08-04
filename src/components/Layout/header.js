import React from 'react';
import { withRouter } from "react-router";
import styled ,{ withTheme } from 'styled-components';
import { headerBackground } from '../../themes';
import {Search} from '../filters';
import ToggleTheme from '../toggleTheme';
//import { getMyWishlist } from './../actions/wishlist';

const Header = (props) => {
	const TopBar = styled.div`
		background-color: ${headerBackground}
	`;

	return (
		<TopBar className="top-bar">
			<div className="app-title"><span style={{fontWeight:'200'}}>Movie</span> Spot</div>
			<div className="header-filler"></div>
			{props.location.pathname !== '/' ? <div></div> :
				<>
					<Search />
					<ToggleTheme theme={props.theme}/>
				</>
			}
			<div><i className="material-icons mi-color wl-btn" title="My wishlist" onClick={() => props.history.push('/wishlist')}>favorite</i></div>
		</TopBar>
	);
}

export default withTheme(withRouter(Header));