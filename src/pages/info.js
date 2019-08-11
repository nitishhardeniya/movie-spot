import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieInfo } from './../actions/movies';
import {IMG_ORIGINAL} from './../constants/config';

class Info extends Component {
	
	constructor(){
		super();
	}

	componentDidMount(){
		//console.log(this.props.match.params.movieId);
		this.props.getMovieInfo(this.props.match.params.movieId);
	}

	getMovieDisplay(info){
		return (<div className="main-content">
					<img src={IMG_ORIGINAL+info.backdrop_path} class="img-fullpage"  alt="no img"/>
					<div className="card-lg">
						<div className="card-popup">
							<div className="container-title">{info.title}</div>
							{info.genres.map(item => <div className="genre">{item.name}</div>)}
						</div>
					</div>
				</div>);
	}

	render() {
		console.log("Updates!!",this.props.info);
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
	getMovieInfo
}

const mapStateToProps = (state) => ({
	info: state.movies.info
});

export default connect(mapStateToProps,mapDispatchToProps)(Info);
