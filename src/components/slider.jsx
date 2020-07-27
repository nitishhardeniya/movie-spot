import React from 'react';
import {IMG_THUMB} from './../constants/config';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

const sliderTileSizes = {
	small: {
		width: '150px',
		height: '220px'
	},
	medium: {
		width: '180px',
		height: '280px'
	},
	large: {
		width: '210px',
		height: '320px'
	}
};

const Slider = (props)	=>	{
	let { records, type, wishlist: currentWL, size } = props;

	const viewDetails = (id, mediaType) => {
		
		if((type || mediaType) && (mediaType || type) === 'movie') {
			props.history.push('/movie/'+id);
		} else {
			props.history.push('/tv/'+id);
		}
	}

	return (<div className="mv-slider">
			{records && records.map(record => {
							return <div className={`slider-tiles ${size}`} key={record.id} onClick={() => viewDetails(record.id, record.media_type)}>
							<div className="tile-body">
								<img src={IMG_THUMB+record.poster_path} width={sliderTileSizes[size].width} height={sliderTileSizes[size].height} alt="no img"/>
								{currentWL && currentWL.hasOwnProperty(record.id) ? <i className="material-icons mi-color wishlist-icon">favorite</i> : <i className="material-icons mi-color wishlist-icon">favorite_border</i>}
							</div>
							{/* <div className="tile-footer">
								<div>{record.title || record.name}</div>
							</div> */}
							</div>
						})}
		</div>);
}

const mapStateToProps = (state) => ({
	wishlist: state.wishlist
});

export default connect(mapStateToProps,null)(React.memo(withRouter(Slider)));

Slider.defaultProps = {
	type: "movie",
	records: [],
	size: "small"
};