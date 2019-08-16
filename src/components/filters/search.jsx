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
				<input type="text" onChange={event => this.getFilteredResults(event.target.value)} />
			</div>)
	}
}

const mapDispatchToProps = {
	getSearchResult:getSearchResult
} 

export default connect(null,mapDispatchToProps)(Search);