import React from "react";

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			userFirstName: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}
	render() {
		return (
			<form>
				<input name="this is a placeholder" />
			</form>
		);
	}
}
export default Form;
