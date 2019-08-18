import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieInfo } from './../actions/movies';
import {IMG_ORIGINAL} from './../constants/config';
import moment from 'moment';
import LS from './../helpers/localDB';

class Info extends Component {
	
	componentDidMount(){
		//console.log(this.props.match.params.movieId);
		this.props.getMovieInfo(this.props.match.params.movieId);
	}

	addToWishlist = (movie) => {
		//Add this to localStorage
		//console.log(movieId);
		let wishlistItem = {
			id: movie.id,
			name: movie.title,
			backdrop_path : movie.backdrop_path
		}
		let currentWL = LS.getData("wishlist");
		if(currentWL){
			currentWL[wishlistItem.id] = wishlistItem;
		}else{
			currentWL = {};
			currentWL[wishlistItem.id] = wishlistItem;
		}
		LS.setData("wishlist",currentWL);
	
	}

	getMovieDisplay(info){
		let currentWL = LS.getData("wishlist");
		if(currentWL && currentWL.hasOwnProperty(info.id)){
			console.log("Im in wishlist",info)
		}
		return (<div className="main-content">
					<img src={IMG_ORIGINAL+info.backdrop_path} className="img-fullpage"  alt="no img"/>
					<div className="card-lg">
						<div className="card-popup">
							<div className="popup-title">{info.title}</div>
							<div className="card-row">{info.genres.map(item => <div key={item.id} className="genre">{item.name}</div>)} </div>
							<div className="card-row font-grey" style={{marginLeft:'5px'}}>{moment(info.release_date).format('dddd, MMMM D YYYY')}</div>
							<p className="card-row desc">{info.overview}</p>
							<div className="card-row">
								{currentWL && currentWL.hasOwnProperty(info.id) ? <div className="wishlisted">
									<i class="material-icons">done</i>
									Wishlisted
								</div> : 
								<button className="btn-secondary" onClick={()=>{this.addToWishlist(info)}}>Add to wishlist</button>}
							</div>
						</div>
					</div>
				</div>);
	}

	render() {
		//console.log("Updates!!",this.props.info);
		const movieInfo = this.props.info;
		return (
			<React.Fragment>
				<div className="">
					{movieInfo ? this.getMovieDisplay(movieInfo) : <div>Loading...</div> }	
				</div>		
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	getMovieInfo
}

const mapStateToProps = (state) => ({
	info: state.movies.info
});

export default connect(mapStateToProps,mapDispatchToProps)(Info);
