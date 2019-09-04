import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getMovieInfo ,getSimililar } from './../actions/movies';
import { addToWishlist } from './../actions/wishlist';
import {IMG_ORIGINAL} from './../constants/config';
import moment from 'moment';

import Slider from './../components/slider';

class Info extends PureComponent {

	componentDidMount(){
		this.props.getMovieInfo(this.props.match.params.movieId);
		this.props.getSimililar(this.props.match.params.movieId);
	}

	static getDerivedStateFromProps(nextProps,state){
		//nextProps.getMovieInfo(nextProps.match.params.movieId);
		//nextProps.getSimililar(nextProps.match.params.movieId);
	}

	getMovieDisplay(info){
		return (<div className="main-content">
					<img src={IMG_ORIGINAL+info.backdrop_path} className="img-fullpage"  alt="no img"/>
					<div className="card-lg">
						<div className="card-popup">
							<div className="popup-title">{info.title}</div>
							<div className="card-row">{info.genres.map(item => <div key={item.id} className="genre">{item.name}</div>)} </div>
							<div className="card-row font-grey" style={{marginLeft:'5px'}}>{moment(info.release_date).format('dddd, MMMM D YYYY')}</div>
							<p className="card-row desc">{info.overview}</p>
							<div className="card-row">
								<div className="card-column-2">
									<span className="card-body-title">
										<i className="material-icons">star</i>
										{info.vote_average}
									</span>
								</div>
								<div className="card-column-2">
									<span className="card-body-title">
										<i className="material-icons">thumb_up_alt</i>
										{info.vote_count}
									</span>
								</div>
							</div>
							<div className="card-row">
								{this.props.wishlist && this.props.wishlist.hasOwnProperty(info.id) ? <button className="btn-primary">
									<i className="material-icons">favorite</i>
									<span>Wishlisted</span>
								</button> : 
								<button className="btn-secondary" onClick={()=>{this.props.addToWishlist(info)}}>Add to wishlist</button>}
							</div>
						</div>
					</div>
					{this.props.similar && this.props.similar.length >0 && <React.Fragment> <div className="cat-header">Similar movies : </div> <Slider movies={this.props.similar} /> </React.Fragment>}
				</div>
			);
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
	getMovieInfo,
	getSimililar,
	addToWishlist
}

const mapStateToProps = (state) => ({
	info: state.movies.info,
	similar: state.movies.similar,
	wishlist: state.wishlist
});

export default connect(mapStateToProps,mapDispatchToProps)(Info);
