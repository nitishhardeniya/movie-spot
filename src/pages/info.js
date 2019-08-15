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

	addToWishlist = (movieId) => {
		//Add this to localStorage
		//console.log(movieId);
		LS.setData("wishlist",[movieId]);
	}

	getMovieDisplay(info){
		return (<div className="main-content">
					<img src={IMG_ORIGINAL+info.backdrop_path} class="img-fullpage"  alt="no img"/>
					<div className="card-lg">
						<div className="card-popup">
							<div className="popup-title">{info.title}</div>
							<div className="card-row">{info.genres.map(item => <div className="genre">{item.name}</div>)} </div>
							<div className="card-row font-grey">{moment(info.release_date).format('dddd, MMMM D YYYY')}</div>
							<p className="card-row desc">{info.overview}</p>
							<button className="btn-secondary" onClick={()=>{this.addToWishlist(info.id)}}>Add to wishlist</button>
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
