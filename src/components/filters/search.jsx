import React, { Component } from 'react';
import Common from './../../helpers/common';
import {getSearchResult} from './../../actions/filters';

import { connect } from 'react-redux';

class Search extends Component {
	
	getFilteredResults = Common._debounce((text) => {
		this.props.getSearchResult(text);
	},2000)

	render(){
		return (<div className="search-box">
				<i className="material-icons mi-color mi-pointer" style={{position: 'absolute',top: '7px',right: '10px'}}>search</i>
				<input type="text" placeholder="Search for movies ..." onChange={event => this.getFilteredResults(event.target.value)} />
			</div>)
	}
}

const mapDispatchToProps = {
	getSearchResult:getSearchResult
} 

export default connect(null,mapDispatchToProps)(Search);