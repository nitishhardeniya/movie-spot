import React from 'react';
import {IMG_THUMB} from './../constants/config';
import { withRouter } from "react-router";

const Slider = (props)	=>	{
	let {movies,size} = props;

	const gotoMovie = (movieId) => {
		props.history.push('/movie/'+movieId)
	}

	return (<div className="mv-slider">
			{movies.map((movie)=>{
							return <div className="slider-tiles" key={movie.id} onClick={()=>gotoMovie(movie.id)}>
							<div className="tile-body">
								<img src={IMG_THUMB+movie.poster_path} width={240} height={360} alt="no img"/>
							</div>
							<div className="tile-footer">
								<div>{movie.title}</div>
							</div>
							
							</div>
						})}
		</div>);
}

export default withRouter(Slider);