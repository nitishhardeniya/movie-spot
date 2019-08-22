import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getMovieInfo } from './../actions/movies';
import {IMG_ORIGINAL} from './../constants/config';
import moment from 'moment';
import LS from './../helpers/localDB';

class Info extends PureComponent {

	constructor(props){
		super(props);
		this.state = {
			wishlist : {}
		}
	}

	componentDidMount(){
		this.props.getMovieInfo(this.props.match.params.movieId);
		let currentWL = LS.getData("wishlist");
		this.setState({
			wishlist : currentWL
		})
	}

	addToWishlist = (movie) => {
		
		let wishlistItem = {
			id: movie.id,
			name: movie.title,
			poster_path : movie.poster_path
		}
		let currentWL = {...this.state.wishlist};
		if(currentWL){
			currentWL[wishlistItem.id] = wishlistItem;
		}else{
			currentWL = {};
			currentWL[wishlistItem.id] = wishlistItem;
		}
		this.setState({
			wishlist : currentWL
		},()=>{
			LS.setData("wishlist",currentWL);	
		});
	}

	getMovieDisplay(info){
		/*if(this.state.wishlist && this.state.wishlist.hasOwnProperty(info.id)){
			console.log("Im in wishlist",info)
		}*/
		return (<div className="main-content">
					<img src={IMG_ORIGINAL+info.backdrop_path} className="img-fullpage"  alt="no img"/>
					<div className="card-lg">
						<div className="card-popup">
							<div className="popup-title">{info.title}</div>
							<div className="card-row">{info.genres.map(item => <div key={item.id} className="genre">{item.name}</div>)} </div>
							<div className="card-row font-grey" style={{marginLeft:'5px'}}>{moment(info.release_date).format('dddd, MMMM D YYYY')}</div>
							<p className="card-row desc">{info.overview}</p>
							<div className="card-row">
								{this.state.wishlist && this.state.wishlist.hasOwnProperty(info.id) ? <button className="btn-primary">
									<i className="material-icons">favorite</i>
									Wishlisted
								</button> : 
								<button className="btn-secondary" onClick={()=>{this.addToWishlist(info)}}>Add to wishlist</button>}
							</div>
						</div>
					</div>
				</div>);
	}

	render() {
		//console.log("Updates!!",this.props.info);
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
