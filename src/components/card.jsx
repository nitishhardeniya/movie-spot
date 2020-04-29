import React from 'react';
import { withRouter } from "react-router";

import {IMG_THUMB} from './../constants/config';
import moment from 'moment';
import Rating from './rating';

const Card = (props)	=>	{
	
	const gotoMovie = (movieId) => {
		props.history.push('/movie/'+movieId)
	}

	//console.log(props.cardMeta)
	let {id,poster_path,title,name,release_date,first_air_date,vote_average} = props.cardMeta;
	return (<div className="card" key={id} onClick={() => gotoMovie(id)} >
				<img src={IMG_THUMB+poster_path} width={190} height={280} alt="no img"/>
				<div className="card-footer">
					{/* Rating, users, add to wishlist*/}
					<div className="card-row-sm">{title || name}</div>
					<div className="card-row-sm">
						<Rating score={vote_average} total={10} />
					</div>
					<div className="card-row-sm font-grey">{moment(release_date || first_air_date).format('dddd, MMMM D YYYY')}</div>
				</div>
			</div>)
}

export default React.memo(withRouter(Card));