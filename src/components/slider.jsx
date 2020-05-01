import React from 'react';
import {IMG_THUMB} from './../constants/config';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

const Slider = (props)	=>	{
	let { records, type } = props;

	const viewDetails = (id, mediaType) => {
		
		if((type || mediaType) && (mediaType || type) === 'movie') {
			props.history.push('/movie/'+id);
		} else {
			props.history.push('/tv/'+id);
		}
	}

	const currentWL = props.wishlist;
	
	return (<div className="mv-slider">
			{records && records.map(record => {
							return <div className="slider-tiles" key={record.id} onClick={() => viewDetails(record.id, record.media_type)}>
							<div className="tile-body">
								<img src={IMG_THUMB+record.poster_path} width={190} height={290} alt="no img"/>
								{currentWL && currentWL.hasOwnProperty(record.id) ? <i className="material-icons mi-color wishlist-icon">favorite</i> : <i className="material-icons mi-color wishlist-icon">favorite_border</i>}
							</div>
							<div className="tile-footer">
								<div>{record.title || record.name}</div>
							</div>
							
							</div>
						})}
		</div>);
}

const mapStateToProps = (state) => ({
	wishlist: state.wishlist
});

export default connect(mapStateToProps,null)(React.memo(withRouter(Slider)));