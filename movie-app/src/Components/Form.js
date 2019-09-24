import React from 'react';

const Form = (props) => (

	<form onSubmit = { props.getMovie } style={{marginBottom: "2rem"}}>
		<input className="form__input" type="text" name="movie" placeholder="Enter Your Movie..." />
		<button className="form__button">Search Movie</button>
	</form>
);

export default Form;