import React from 'react';

const Form = (props) => (

	<form onSubmit = { props.getMovie } >
		<input type="text" name="movie" placeholder="Enter Your Movie..." />
		<button>Search Movie</button>
	</form>
);

export default Form;