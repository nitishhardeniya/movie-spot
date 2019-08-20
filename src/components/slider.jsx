import React from 'react';
import {IMG_THUMB} from './../constants/config';
import { withRouter } from "react-router";
import LS from './../helpers/localDB';

const Slider = (props)	=>	{
	let {movies} = props;

	const gotoMovie = (movieId) => {
		props.history.push('/movie/'+movieId)
	}

	const currentWL = LS.getData("wishlist");
	
	return (<div className="mv-slider">
			{movies.map(movie => {
							return <div className="slider-tiles" key={movie.id} onClick={() => gotoMovie(movie.id)}>
							<div className="tile-body">
								<img src={IMG_THUMB+movie.poster_path} width={240} height={360} alt="no img"/>
								{currentWL && currentWL.hasOwnProperty(movie.id) ? <i className="material-icons mi-color wishlist-icon">favorite</i> : <i className="material-icons mi-color wishlist-icon">favorite_border</i>}
							</div>
							<div className="tile-footer">
								<div>{movie.title}</div>
							</div>
							
							</div>
						})}
		</div>);
}

export default React.memo(withRouter(Slider));