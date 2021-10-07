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
			callerID: "",
			callerAddress: "",
			callerWebsite: "",
			callDate: "",
			callTime: "",
			reasonSell:false,
			reasonWon:false,
			reasonSurvey:false,
			reasonPolitical:false,
			reasonDonation:false,
			reasonDebt:false,
			reasonPsa:false,
			reasonUnknown:false,
			
		};
	}

	handleChange = (event) => {
		const { name, value , checked, type} = event.target;
		type==="checkbox" ?
		this.setState({ [name]: checked }):
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
						placeholder="819-555-1234"
						value={this.callerNumber}
						onChange={this.handleChange}
					/>
				</label>
				<br />
				<label>
				Caller ID / VoIP (819-555-1234, 1234@example.ca):
					<input
						name="callerID"
						placeholder="Displayed name or number"
						value={this.callerID}
						onChange={this.handleChange}
					/>
				</label>
				<br />
				<div class="headerSmall">If they have you any of the following, please enter it here:</div>
				<br />
				<label>
				Mailing address:
					<input
						name="callerAddress"
						placeholder="123 Main St., Anytown Province"
						value={this.callerAddress}
						onChange={this.handleChange}
					/>
				</label>
				<br />
				<label>
				Website:
					<input
						name="callerWebsite"
						placeholder="https://companyname.ca"
						value={this.callerWebsite}
						onChange={this.handleChange}
					/>
				</label>
				<br />
				<label>
				E-mail address:
					<input
						name="callerEmail"
						placeholder="person@companyname.ca"
						value={this.callerEmail}
						onChange={this.handleChange}
					/>
				</label>
				<br />
				<label>
				Date:
					<input
						name="callDate"
						placeholder="1972-11-29"
						value={this.callDate}
						onChange={this.handleChange}
					/>
				</label>
				<br />
				<label>
				Time (24 hour format):
					<input
						name="callTime"
						placeholder="14:38"
						value={this.callTime}
						onChange={this.handleChange}
					/>
				</label>
				<br />
				<div class="headerSmall" >What was the expressed reason for the call? (check all that apply)</div>
				<label>
					<input
						type="checkbox"
						name="reasonSell"
						checked={this.reasonSell}
						onChange={this.handleChange}
					/> Wanted to sell you something
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="reasonWon"
						checked={this.reasonWon}
						onChange={this.handleChange}
					/> Said you won something
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="reasonSurvey"
						checked={this.reasonSurvey}
						onChange={this.handleChange}
					/> Wanted you to do a survey
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="reasonPolitical"
						checked={this.reasonPolitical}
						onChange={this.handleChange}
					/> Tell you a political, or politically related, message
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="reasonDonation"
						checked={this.reasonDonation}
						onChange={this.handleChange}
					/> Looking for a donation from you
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="reasonDebt"
						checked={this.reasonDebt}
						onChange={this.handleChange}
					/> It was a debt or bill collector
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="reasonPsa"
						checked={this.reasonPsa}
						onChange={this.handleChange}
					/> It was information or public service message
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="reasonUnknown"
						checked={this.reasonUnknown}
						onChange={this.handleChange}
					/> You don’t know, or ended the call before finding out
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
