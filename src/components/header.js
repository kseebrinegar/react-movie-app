import React from 'react';
import Logo from './logo';
import SearchBar from './searchBar';

const Header = (props) => {
	return (
		<header id="header">
			<Logo />
			<SearchBar clickedListItem={props.clickedListItem} searchResults={props.searchResults} searchMovies={props.searchMovies} movies={props.movies}/>
		</header>
	);
};

export default Header;