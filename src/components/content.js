import React from 'react';

 const Content = (props) => {
 	const addressForPic = `https://image.tmdb.org/t/p/w500/${props.movies.img}`;
  	const movies = document.getElementById('app');
	movies.style.backgroundImage = 'url(' + addressForPic + ')';
	movies.style.backgroundSize = 'cover';
	return (
		<section id="content">
			<div id="about-movie">
				<h1>{props.movies.title}</h1>
				<h3>Summary of Movie</h3>
				<p className="paragraph">{props.movies.about}</p>
				<div id="movie-info-left">
					<h6>Original Release:</h6>
					<p className="movie-info">{props.movies.date}</p>
					<h6>Popularity:</h6>
					<p className="movie-info" >{props.movies.popular}</p>
				</div>
				<div id="movie-info-right">
					<h6>Vote Count:</h6>
					<p className="movie-info">{props.movies.voteCount}</p>
					<h6>Vote Average:</h6>
					<p className="movie-info">{props.movies.voteAvg}</p>
				</div>
			</div>
			<div id="movie-pic">
				<img src={addressForPic}/>
			</div>

		</section>
	);
	
};

export default Content;
