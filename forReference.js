import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Example of component mapping

function App() {
	const productComponents = productsData.map((item) => (
		<Product key={item.id} product={item} />
	));

	return <div>{productComponents}</div>;
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			unreadMessages: ["a", "b"],
		};
	}

	render() {
		return <div>Code goes here</div>;
	}
}

export default App;

// https://swapi.dev/
class App extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			isFriendly: false,
			gender: "",
			favColor: "blue",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const { name, value, type, checked } = event.target;
		type === "checkbox"
			? this.setState({ [name]: checked })
			: this.setState({ [name]: value });
	}

	render() {
		return (
			<form>
				<input
					type="text"
					value={this.state.firstName}
					name="firstName"
					placeholder="First Name"
					onChange={this.handleChange}
				/>
				<br />
				<input
					type="text"
					value={this.state.lastName}
					name="lastName"
					placeholder="Last Name"
					onChange={this.handleChange}
				/>

				{/**
				 * Other useful form elements:
				 *
				 *  <textarea /> element
				 *  <input type="checkbox" />
				 *  <input type="radio" />
				 *  <select> and <option> elements
				 */}

				<textarea value={"Some default value"} onChange={this.handleChange} />

				<br />

				<label>
					<input
						type="checkbox"
						name="isFriendly"
						checked={this.state.isFriendly}
						onChange={this.handleChange}
					/>{" "}
					Is friendly?
				</label>
				<br />
				<label>
					<input
						type="radio"
						name="gender"
						value="male"
						checked={this.state.gender === "male"}
						onChange={this.handleChange}
					/>{" "}
					Male
				</label>
				<br />
				<label>
					<input
						type="radio"
						name="gender"
						value="female"
						checked={this.state.gender === "female"}
						onChange={this.handleChange}
					/>{" "}
					Female
				</label>
				{/* Formik */}
				<br />

				<label>Favorite Color:</label>
				<select value={this.state.favColor} onChange={this.handleChange} name="favColor">
					<option value="blue">Blue</option>
					<option value="green">Green</option>
					<option value="red">Red</option>
					<option value="orange">Orange</option>
					<option value="yellow">Yellow</option>
				</select>

				<h1>
					{this.state.firstName} {this.state.lastName}
				</h1>
				<h2>You are a {this.state.gender}</h2>
				<h2>Your favorite color is {this.state.favColor}</h2>
				<button>Submit</button>
			</form>
		);
	}
}
