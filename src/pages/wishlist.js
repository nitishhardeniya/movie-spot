import React from 'react';
import { connect } from 'react-redux';
// import {IMG_THUMB} from './../constants/config';
import { removeFromWishlist,clearWishlist } from './../actions/wishlist';
import BackNav from '../components/custom/back';
import Grid from '../components/custom/Grid';
import Card from '../components/card';

const WishList = (props) => {
	let wishlistData = props.wishlist;
	// console.log(wishlistData,"NH")
	const type = props.match.params ? props.match.params.type : "movie";
	return (<>
		<Grid container>
			<Grid item xs={3} sm={3} md={1} lg={1} xl={1}>
				<BackNav />
			</Grid>
			<Grid item xs={21} sm={21} md={23} lg={23} xl={23}>
				<h3 className="container-label"> My wishlist</h3>
			</Grid>
		</Grid>
	
		<Grid container className="wl">
		{wishlistData && Object.keys(wishlistData).map((wlItem) => {
			return (<Grid item xs={12} sm={12} md={4} lg={4} xl={4} className="wl-box" key={wishlistData[wlItem].id}> 
						<Card key={wlItem} cardMeta={wishlistData[wlItem]} type={type} showFullDetails={false}/>
						<i className="material-icons mi-pointer mi-action" title="Remove" onClick={() => props.removeFromWishlist(wishlistData[wlItem])}>clear</i>
						{/* <img className="wl-poster" alt="movie_img" src={IMG_THUMB+wishlistData[wlItem].poster_path} /> 
						<div className="wl-title">{wishlistData[wlItem].name || wishlistData[wlItem].title} </div>
						<i className="material-icons mi-pointer" title="Remove" onClick={() => props.removeFromWishlist(wishlistData[wlItem])}>clear</i> */}
					</Grid>)
		})}
		</Grid></>)
}

const mapDispatchToProps = {
	removeFromWishlist,
	clearWishlist
}

const mapStateToProps = (state) => ({
	wishlist: state.wishlist
});


export default connect(mapStateToProps,mapDispatchToProps)(WishList);