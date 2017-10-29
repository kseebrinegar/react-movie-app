import React from 'react';
import OptionsList from './optionsList';

const Options = (props) => {
	return (
		<ul id="possibleMatches">
				{
				props.searchResults.map((movie, index) => (

    				index < 4 ? <OptionsList clickedListItem={props.clickedListItem} searchResults={movie.title} id={movie.id} key={movie.id} /> : ''
				
				))
			}	
		</ul>
	);
}

export default Options;
