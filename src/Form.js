import React from "react";
import FormSection from "./FormSection";

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			userFirstName: "Mat",
			callerNumber: "",
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
				<h3>User Information</h3>
				<label>
					Your First Name:
					<input
						name="userFirstName"
						placeholder="First Name"
						value={this.userFirstName}
						onChange={this.handleChange}
					/>
				</label>
				<h3>Caller Information</h3>
				<label>
					Caller Phone Number:
					<input
						name="callerNumber"
						placeholder="Phone Number"
						value={this.callerNumber}
						onChange={this.handleChange}
					/>
				</label>

				{/* <FormSection
					fields={{
						name: "userFirstName",
						value: this.state.userFirstName,
					}}
				/> */}
			</form>
		);
	}
}
export default Form;
