import React from 'react';
import {IMG_THUMB} from './../constants/config';

const WishList = (props) => {
	let wishlistData = props.data;
	//console.log(wishlistData,"NH")
	return (<div className="wl">
		Nitish's wishlist :
		{wishlistData && Object.keys(wishlistData).map((wlItem) => {
			return (<div className="wl-box"> 
						<img className="wl-poster" alt="movie_img" src={IMG_THUMB+wishlistData[wlItem].poster_path} /> 
						<div className="wl-title">{wishlistData[wlItem].name} </div>
						{/*<i class="material-icons mi-color" title="Remove" onClick={props.removeFromWishlist(wlItem)}>clear</i>*/}
					</div>)
		})}
		</div>)
}

export default React.memo(WishList);