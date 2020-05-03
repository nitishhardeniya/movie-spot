import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getMovieInfo, getSimililar, rateMovie } from './../actions/movies';
import { addToWishlist } from './../actions/wishlist';
import {IMG_ORIGINAL} from './../constants/config';
import moment from 'moment';
import Rating from 'react-rating';
import BlankStar from '../assets/blank_star.png';
import FilledStar from '../assets/filled_star.png';
import Slider from './../components/slider';

class Info extends PureComponent {

	constructor(props){
		super(props);
		this.rateMovie = this.rateMovie.bind(this);
	}

	componentDidMount(){
		this.props.getMovieInfo(this.props.match.params.movieId);
		this.props.getSimililar(this.props.match.params.movieId);
	}

	componentDidUpdate(prevProps){
		// console.log("Updated",prevProps.match.params.movieId, this.props.match.params.movieId);
		if(prevProps.match.params.movieId !== this.props.match.params.movieId){
			this.props.getMovieInfo(this.props.match.params.movieId);
			this.props.getSimililar(this.props.match.params.movieId);
		}
		
	}

	rateMovie(value) {
		const ratePayload = {
			id: this.props.match.params.movieId,
			value,
			guest_session_id: this.props.guest.guest_session_id
		}
		this.props.rateMovie(ratePayload);
	}

	/*static getDerivedStateFromProps(nextProps,state){
		console.log("Props -before",state.activeMovie);
		return {
			activeMovie : nextProps.match.params.movieId
		}
	}*/

	getMovieDisplay(info){
		return (<div className="main-content">
					<img src={IMG_ORIGINAL+info.backdrop_path} className="img-fullpage"  alt="no img"/>
					<div className="card-lg">
						<div className="card-popup">
							<div className="popup-title">{info.title}</div>
							<div className="card-row">{info.genres.map(item => <div key={item.id} className="genre">{item.name}</div>)} </div>
							<div className="card-row font-grey">{moment(info.release_date).format('dddd, MMMM D YYYY')}</div>
							<p className="card-row desc">{info.overview}</p>
							<div className="card-row">
								<div className="card-column-2">
									<span className="card-column-content">
										<i className="material-icons">star</i>
										{info.vote_average} ({info.vote_count})
									</span>
								</div>
								<div className="card-column-2">
									<span className="card-body-title">
										Runtime
									</span>
                                    <div className="card-column-content">{Math.floor(info.runtime / 60) + 'hr ' + info.runtime % 60 + 'min'}</div>
								</div>
							</div>
							
							<div className="card-row pad-b-10">
								<Rating 
									start={0}
									stop={10}
									step={2}
									initialRating={info.vote_average}
									emptySymbol={<img src={BlankStar} className="icon" />}
  									fullSymbol={<img src={FilledStar} className="icon" />}
									onChange={this.rateMovie}
								/>
							</div>
							<div className="card-row">
								{this.props.wishlist && this.props.wishlist.hasOwnProperty(info.id) ? <button className="btn-primary">
									<i className="material-icons">favorite</i>
									<span>Wishlisted</span>
								</button> : 
								<button className="btn-secondary" onClick={()=>{this.props.addToWishlist(info)}}>Add to wishlist</button>}
							</div>
							{this.props.similar && this.props.similar.length >0 && <React.Fragment> <div className="cat-header">Similar movies : </div> <Slider records={this.props.similar} type="movie" /> </React.Fragment>}
						</div>
					</div>
				</div>
			);
	}

	render() {
		// console.log("Updates!!",this.props.info);
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
	addToWishlist,
	rateMovie
}

const mapStateToProps = (state) => ({
	info: state.movies.info,
	similar: state.movies.similar,
	wishlist: state.wishlist,
	guest: state.authentication.guestSession,
});

export default connect(mapStateToProps,mapDispatchToProps)(Info);
