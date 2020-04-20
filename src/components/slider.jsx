import React from 'react';
import {IMG_THUMB} from './../constants/config';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

const Slider = (props)	=>	{
	let {movies} = props;

	const gotoMovie = (movieId) => {
		props.history.push('/movie/'+movieId)
	}

	const currentWL = props.wishlist;
	
	return (<div className="mv-slider">
			{movies.map(movie => {
							return <div className="slider-tiles" key={movie.id} onClick={() => gotoMovie(movie.id)}>
							<div className="tile-body">
								<img src={IMG_THUMB+movie.poster_path} width={190} height={280} alt="no img"/>
								{currentWL && currentWL.hasOwnProperty(movie.id) ? <i className="material-icons mi-color wishlist-icon">favorite</i> : <i className="material-icons mi-color wishlist-icon">favorite_border</i>}
							</div>
							<div className="tile-footer">
								<div>{movie.title}</div>
							</div>
							
							</div>
						})}
		</div>);
}

const mapStateToProps = (state) => ({
	wishlist: state.wishlist
});

export default connect(mapStateToProps,null)(React.memo(withRouter(Slider)));