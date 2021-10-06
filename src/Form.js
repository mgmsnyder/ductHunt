import React from "react";
// import FormSection from "./FormSection";

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "",
			userFirstName: "",
			userLastName: "",
			callerNumber: "",
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}
	render() {
		return (
			<div>
				<div class="sectionLabel">User Information</div>
				<label>
					Title
					<select value={this.state.title} name="title" onChange={this.handleChange}>
						<option value="">Select</option>
						<option label="Mr" value="Mr">
							Mr
						</option>
						<option label="Ms" value="Ms">
							Ms
						</option>
						<option label="Miss" value="Miss">
							Miss
						</option>
						<option label="Mrs" value="Mrs">
							Mrs
						</option>
						<option label="Dr" value="Dr">
							Dr
						</option>
					</select>
				</label>

				<label>
					Your First Name:
					<input
						name="userFirstName"
						placeholder="First Name"
						value={this.userFirstName}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Your Last Name:
					<input
						name="userLastName"
						placeholder="Last Name"
						value={this.userLastName}
						onChange={this.handleChange}
					/>
				</label>

				<div class="sectionLabel">Caller Information</div>
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
			</div>
		);
	}
}
export default Form;
