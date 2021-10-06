import React from "react";
// import FormSection from "./FormSection";

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "",
			userFirstName: "",
			userLastName: "",
			callUserAction:"",
			callOnPickup:"",
			callNameOrNumber:"",
			callDeclaration:"",
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

				<div class="sectionLabel">Call Event</div>
				<label>
					When I received this call I: 
					<br />
					<label>
					<input 
						type="radio"
						value="Answered"
						name="callUserAction" 
						checked={this.state.callUserAction==="Answered"}
						onChange={this.handleChange} />{" "}
						Answered the phone</label>
					<br />

					<label>
					<input 
						type="radio"
						value="Unanswered"
						name="callUserAction" 
						checked={this.state.callUserAction==="Unanswered"}
						onChange={this.handleChange} />{" "}
						Did not answer the phone</label>
					<br />

					<label>
					<input 
						type="radio"
						value="Message"
						name="callUserAction" 
						checked={this.state.callUserAction==="Message"}
						onChange={this.handleChange} />{" "}
						Received a voice mail message</label>
				</label>

				<br />
				<label>
					What happened after you answered the phone?  
					<br />
					<label>
					<input 
						type="radio"
						value="live"
						name="callOnPickup" 
						checked={this.state.callOnPickup==="live"}
						onChange={this.handleChange} />{" "}
						It was a live person</label>
					<br />

					<label>
					<input 
						type="radio"
						value="recording"
						name="callOnPickup" 
						checked={this.state.callOnPickup==="recording"}
						onChange={this.handleChange} />{" "}
						It was a pre-recorded message</label>
					<br />

					<label>
					<input 
						type="radio"
						value="hold"
						name="callOnPickup" 
						checked={this.state.callOnPickup==="hold"}
						onChange={this.handleChange} />{" "}
						A pre-recorded message asked me to hold for a live person</label>
					<br />

					<label>
					<input 
						type="radio"
						value="vacant"
						name="callOnPickup" 
						checked={this.state.callOnPickup==="vacant"}
						onChange={this.handleChange} />{" "}
						There was no one on the line</label>
				</label>

				<br />
				<label>
						To file a complaint, you must know the name or phone number of the organization.<br />
							Please indicate which of the following you have					
					<br />
					<label>
					<input 
						type="radio"
						value="name"
						name="callNameOrNumber" 
						checked={this.state.callNameOrNumber==="name"}
						onChange={this.handleChange} />{" "}
						The name of the organization</label>
					<br />

					<label>
					<input 
						type="radio"
						value="number"
						name="callNameOrNumber" 
						checked={this.state.callNameOrNumber==="number"}
						onChange={this.handleChange} />{" "}
						The phone number of the organization</label>
					<br />

					<label>
					<input 
						type="radio"
						value="both"
						name="callNameOrNumber" 
						checked={this.state.callNameOrNumber==="both"}
						onChange={this.handleChange} />{" "}
						Both the name and phone number of the organization</label>
						</label>
				<br />

				<label>
					I declare that I am providing accurate information: 
					<br />
					<label>
					<input 
						type="radio"
						value="yes"
						name="callDeclaration" 
						checked={this.state.callDeclaration==="yes"}
						onChange={this.handleChange} />{" "}
						Yes</label>
					<br />

					<label>
					<input 
						type="radio"
						value="no"
						name="callDeclaration" 
						checked={this.state.callDeclaration==="no"}
						onChange={this.handleChange} />{" "}
						No</label>
					</label><br />

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
