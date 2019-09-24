import React from 'react';

const Movies = props => (
	<div className="container">
		<div className="row">
		{ props.movies && props.movies.map((movie) => {
			return(
				<div key={movie.Title} className="col-md-4" style={{ marginBottom:"2rem" }}>
					<div className="movies__box">
						<img
							className="movie-img"
							src={movie.Poster}
							alt={movie.Title} />
							<div className="movies__text">
				            	<h5 className="movies__title">
				            	{ movie.Title.length < 20 ? `${movie.Title}` : `${movie.Title.substring(0, 25)}...` }
				            	</h5>
			            	</div>
				            <button className="movie_buttons">
				            	View Movie
				            </button>
					</div>
				</div>
			);
		})
		}
		</div>
	</div>
);

export default Movies;