import React from 'react';

const OptionsList = (props) => {

	return (
		<li 
		onClick={(() => {
			return props.clickedListItem(props.id);
		})}
		>
			{props.searchResults}
		</li>
	);
}

export default OptionsList;
