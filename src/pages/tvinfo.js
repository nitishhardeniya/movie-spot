import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getTvSeriesInfo ,getSimililarTvSeries } from './../actions/tv';
import { addToWishlist } from './../actions/wishlist';
import {IMG_ORIGINAL} from './../constants/config';
import moment from 'moment';

import Slider from './../components/slider';

class TVInfo extends PureComponent {

	componentDidMount(){
		this.props.getTvSeriesInfo(this.props.match.params.tvId);
		this.props.getSimililarTvSeries(this.props.match.params.tvId);
	}

	componentDidUpdate(prevProps){
		if(prevProps.match.params.tvId !== this.props.match.params.tvId){
			this.props.getTvSeriesInfo(this.props.match.params.tvId);
			this.props.getSimililarTvSeries(this.props.match.params.tvId);
		}
		
	}

	getMovieDisplay(info){
		return (<div className="main-content">
					<img src={IMG_ORIGINAL+info.backdrop_path} className="img-fullpage"  alt="no img"/>
					<div className="card-lg">
						<div className="card-popup">
							<div className="popup-title">{info.name}</div>
							<div className="card-row">{info.genres.map(item => <div key={item.id} className="genre">{item.name}</div>)} </div>
							<div className="card-row font-grey">{moment(info.first_air_date).format('dddd, MMMM D YYYY')}</div>
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
										Status
									</span>
                                    <div className="card-column-content">{info.status}</div>
								</div>
                                
								<div className="card-column-2">
									<span className="card-body-title">
										Number of Seasons
									</span>
                                    <div className="card-column-content">{info.number_of_seasons}</div>
								</div>

								<div className="card-column-2">
									<span className="card-body-title">
										Number of Episodes
									</span>
                                    <div className="card-column-content">{info.number_of_episodes}</div>
								</div>
							</div>

                            <div className="season-list">
                                {info.seasons && info.seasons.map(season => (
                                    <div className="season-item" style={{ backgroundImage: `url(${IMG_ORIGINAL+season.poster_path})`}}></div>
                                ))}
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
					{this.props.similar && this.props.similar.length >0 && <React.Fragment> <div className="cat-header">Similar movies : </div> <Slider records={this.props.similar} type="tv"/> </React.Fragment>}
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
    getTvSeriesInfo,
    getSimililarTvSeries,
    addToWishlist
}

const mapStateToProps = (state) => ({
	info: state.tv.info,
	similar: state.tv.similar,
	wishlist: state.wishlist
});

export default connect(mapStateToProps,mapDispatchToProps)(TVInfo);
