import React, { Component } from 'react';
import { BASE_URL, POPULAR, TOP_RATED, API_KEY } from './../constants/config';
import Header from './../components/header';
import Slider from './../components/slider';

import { connect } from 'react-redux';
import { getPopular,getToprated } from './../actions/movies';

class Showcase extends Component {

	constructor(){
		super();
		this.state = {
			movies:[],
			popular:[],
			toprated:[]
		}
	}

	componentDidMount(){
		/*fetch(BASE_URL+POPULAR+'api_key='+API_KEY).then((data)=>data.json()).then(data=>{
			this.setState({
				popular:data.results
			})
		})

		fetch(BASE_URL+TOP_RATED+'api_key='+API_KEY).then((data)=>data.json()).then(data=>{
			this.setState({
				toprated:data.results
			})
		});*/
		//console.log(this.props)
		this.props.getPopular();
		this.props.getToprated();
	}

	static getDerivedStateFromProps(props, state) {
		if(props.popular){
			return {
				popular:props.popular
			};
		}else if(props.toprated){
			return {
				toprated:props.toprated
			};
		}

		return {};
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<section className="section">
					<div className="cat-header">Most Popular</div>
					{this.state.popular && this.state.popular.length >0 && <Slider movies={this.state.popular} size={10} />}

					<div className="cat-header">Top rated</div>
					{this.state.toprated && this.state.toprated.length >0 && <Slider movies={this.state.toprated} size={10} />}	
				</section>
				
			</React.Fragment>);
	}
}

const mapDispatchToProps = {
	getPopular,
	getToprated
};

const mapStateToProps = (state) => ({
	popular:state.popular,
	toprated: state.toprated
});

export default connect(mapStateToProps,mapDispatchToProps)(Showcase);
