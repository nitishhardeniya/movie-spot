import React from 'react';
import {IMG_THUMB} from './../constants/config';

export default (props)	=>	{
	let {movies,size} = props;
	//console.log(props);
	return (<div className="mv-slider">
			{movies.map((movie)=>{
							return <div className="slider-tiles" key={movie.id}>
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