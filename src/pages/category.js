import React, { Component } from 'react';
import Card from './../components/card';
import { connect } from 'react-redux';
import { getPopular, getUpcoming, getToprated } from './../actions/movies';

const Categories = {
	popular: {
		type : 'popular',
		action : getPopular
	},
	upcoming: {
		type : 'upcoming',
		action : getUpcoming
	},
	toprated: {
		type : 'toprated',
		action : getToprated
	}
}

let currentCat;

class Category extends Component {
	
	componentDidMount(){
		currentCat = this.props.match.params.category;
		console.log(currentCat,"nh");
		this.props.getToprated();
	}

	render() {
	
		return (
			<React.Fragment>
				<div className="container-title">Toprated</div>
				<div className="container">
					{this.props.toprated && this.props.toprated.map((movie)=>{
						return (<Card key={movie.id} cardMeta={movie} />)
					})}
				</div>		
			</React.Fragment>
		);
	}
}

console.log(Categories[currentCat])

const mapDispatchToProps = {
	//Categories[currentCat].action
	getToprated
};

const mapStateToProps = (state) =>({
	currentCat : state.movies[currentCat]
	//toprated: state.movies.toprated
});

export default connect(mapStateToProps,mapDispatchToProps)(Category);
