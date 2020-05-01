import React from 'react';
import {IMG_THUMB} from './../constants/config';
import { connect } from 'react-redux';
import { removeFromWishlist,clearWishlist } from './../actions/wishlist';

const WishList = (props) => {
	let wishlistData = props.data;
	//console.log(wishlistData,"NH")
	return (<div className="wl">
		Nitish's wishlist :
		{wishlistData && Object.keys(wishlistData).map((wlItem) => {
			return (<div className="wl-box" key={wishlistData[wlItem].id}> 
						<img className="wl-poster" alt="movie_img" src={IMG_THUMB+wishlistData[wlItem].poster_path} /> 
						<div className="wl-title">{wishlistData[wlItem].name || wishlistData[wlItem].title} </div>
						<i className="material-icons mi-pointer" title="Remove" onClick={() => props.removeFromWishlist(wishlistData[wlItem])}>clear</i>
					</div>)
		})}
		</div>)
}

const mapDispatchToProps = {
	removeFromWishlist,
	clearWishlist
}

export default connect(null,mapDispatchToProps)(WishList);