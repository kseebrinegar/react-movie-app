import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Request from 'superagent';

export default class Movies extends React.Component {
	constructor(props) {
		super(props)
		this.searchMovies = this.searchMovies.bind(this);
		this.clickedListItem = this.clickedListItem.bind(this);
		this.state = {
			movies: {},
			searchResults: []	
		};	
	}
	clickedListItem(id) {
		this.setState(() => {
			const url = `https://api.themoviedb.org/3/movie/${id}?api_key=f23ad61bd3a0f67452247b56d4d3ace0`;
			Request.get(url).then((response) => {
				const movieInfo = response.body; 
				this.setState(() => {
					return {
						movies: {
							id: movieInfo.id,
							date: movieInfo.release_date,
							voteAvg: movieInfo.vote_average,
							title: movieInfo.title,
							img: movieInfo.poster_path,
							popular: movieInfo.popularity,
							voteCount: movieInfo.vote_count,
							about: movieInfo.overview
						},
						searchResults: []
					};
				});
			});
		});
	}

	searchMovies(valueOfSearch) {
		const searchTerm = valueOfSearch.trim();

		if (searchTerm !== '') {
			const  url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=f23ad61bd3a0f67452247b56d4d3ace0`;
			Request.get(url).then((response) => {
				const movieInfo = response.body.results;
		
				if (movieInfo.length >= 1) {
					this.setState(() => {
						return {
							searchResults: movieInfo
						}
					});
				}
			});
		}
	}

	componentWillMount() {
		const url = 'https://api.themoviedb.org/3/search/movie?query=interstellar&api_key=f23ad61bd3a0f67452247b56d4d3ace0';
		Request.get(url).then((response) => {
			const movieInfo = response.body.results[0]; 
			this.setState(() => {
				return {
					movies: {
						id: movieInfo.id,
						date: movieInfo.release_date,
						voteAvg: movieInfo.vote_average,
						title: movieInfo.title,
						img: movieInfo.poster_path,
						popular: movieInfo.popularity,
						voteCount: movieInfo.vote_count,
						about: movieInfo.overview
					}
				};
			});
		});
	}
	

	render() {
		return (
			<div>
				<div id="movies">
					<Header clickedListItem={this.clickedListItem} searchResults={this.state.searchResults} movies={this.state.movies} searchMovies={this.searchMovies}/>
					<Content movies={this.state.movies}/>
				</div>
				<Footer />
			</div>
		);
	}
}

