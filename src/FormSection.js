import React from "react";
import FormItem from "./FormItem";

function FormSection(props) {
	return (
		<div>
			{this.props}
			<FormItem props={props} />
		</div>
	);
}

export default FormSection;
