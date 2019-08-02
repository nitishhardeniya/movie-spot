import React, { Component } from 'react';

export default class home extends Component {

	constructor(){
		super();
		this.state = {
			movies:[]
		}
	}

	componentDidMount(){
		fetch('https://api.themoviedb.org/3/movie/popular?api_key=d6dadf6fd94626fca2e1aab19a6cf5e0').then((data)=>data.json()).then(data=>{
			this.setState({
				movies:data.results
			})
		})
	}

	render() {
		return (
			<React.Fragment>
			{this.state.movies.map((movie)=>{
							return <div>{movie.title}</div>
						})}
			</React.Fragment>);
	}
}
