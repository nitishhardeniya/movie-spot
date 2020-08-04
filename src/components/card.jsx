import React from 'react';
import { withRouter } from "react-router";

import {IMG_THUMB} from './../constants/config';
import moment from 'moment';
import Rating from './rating';

const Card = (props)	=>	{
	
	let { type, cardMeta, showFullDetails } = props;
	const viewDetails = (id) => {
		if(type && type === 'movie') {
			props.history.push('/movie/'+id);
		} else {
			props.history.push('/tv/'+id);
		}
	}

	//console.log(props.cardMeta)
	let {id,poster_path,title,name,release_date,first_air_date,vote_average} = cardMeta;
	return (<div className="card" key={id} onClick={() => viewDetails(id)} >
				<img src={IMG_THUMB+poster_path} alt="no img"/>
				<div className="card-footer">
					{/* Rating, users, add to wishlist*/}
					<div className="card-row-sm">{title || name}</div>
					{/* <div className="card-row-sm">
						<Rating score={vote_average} total={10} />
					</div> */}
					{showFullDetails && <div className="card-row-sm font-grey">{moment(release_date || first_air_date).format('dddd, MMMM D YYYY')}</div>}
				</div>
			</div>)
}

export default React.memo(withRouter(Card));

Card.defaultProps = {
	showFullDetails: true,
}