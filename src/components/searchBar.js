import React from 'react';
import Options from './options';
import Request from 'superagent';

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props)
	}
	wow(e) {
		e.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.wow}id="searchBar-container">
				<input 
					onChange={((e) => {
						const valueOfSearch = e.target.value;
						return this.props.searchMovies(valueOfSearch);
					})} 
					id="searchBar" 
					placeholder="Search Movie Title..."
				/>
				<Options clickedListItem={this.props.clickedListItem} searchResults={this.props.searchResults} />
			</form>
		);
	}
};


