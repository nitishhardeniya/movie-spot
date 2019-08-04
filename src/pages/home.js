import React, { Component } from 'react';
import { BASE_URL, POPULAR, TOP_RATED, API_KEY } from './../constants/config';
import Header from './../components/header';
import Card from './../components/card';
import Slider from './../components/slider';

export default class Home extends Component {

	constructor(){
		super();
		this.state = {
			movies:[],
			popular:[],
			toprated:[]
		}
	}

	componentDidMount(){
		fetch(BASE_URL+POPULAR+'api_key='+API_KEY).then((data)=>data.json()).then(data=>{
			this.setState({
				popular:data.results
			})
		})

		fetch(BASE_URL+TOP_RATED+'api_key='+API_KEY).then((data)=>data.json()).then(data=>{
			this.setState({
				toprated:data.results
			})
		})
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				{/*<div className="container">
					{this.state.movies.map((movie)=>{
						return (<Card cardMeta={movie} />)
					})}
				</div>*/}
				
				<section className="section">
					<div className="cat-header">Most Popular</div>
					{this.state.popular && this.state.popular.length >0 && <Slider movies={this.state.popular} size={10} />}

					<div className="cat-header">Top rated</div>
					{this.state.toprated && this.state.toprated.length >0 && <Slider movies={this.state.toprated} size={10} />}	
				</section>
				
			</React.Fragment>);
	}
}
