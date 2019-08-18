import React, { Component } from 'react';
import Card from './../components/card';
import { connect } from 'react-redux';
import { getPopular, getUpcoming, getToprated } from './../actions/movies';

/*const Categories = {
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
}*/

let currentCat;

class Category extends Component {
	
	componentDidMount(){
		currentCat = this.props.match.params.category;
		console.log(currentCat,"nh");

		if(currentCat == 'popular'){
			this.props.getPopular();	
		} else if(currentCat == 'upcoming'){
			this.props.getUpcoming();	
		} else if(currentCat == 'toprated'){
			this.props.getToprated();	
		}
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

const mapDispatchToProps = {
	getPopular,
	getUpcoming,
	getToprated
};

const mapStateToProps = (state) =>({
	popular: state.movies.popular,
	upcoming: state.movies.upcoming,
	toprated: state.movies.toprated
});

export default connect(mapStateToProps,mapDispatchToProps)(Category);
