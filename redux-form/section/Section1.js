import {Field, FormSection} from "redux-form";
import React from "react";
import { renderField }from "../module/renderField";
import {required} from "../module/validation";

class Section1 extends React.Component {
	render() {
		return (
			<FormSection name="user">
					<Field name="address"
					       component={renderField}
					       validate={[required]}
					       label="Address"
					       type="text"/>
					<Field name="lastName"
					       component={renderField}
					       validate={[required]}
					       label="Last Name"
					       type="text"/>
					<Field name="middleName"
					       component={renderField}
					       validate={[required]}
					       label="Middle Name"
					       type="text"/>
					<Field name="firstName"
					       component={renderField}
					       validate={[required]}
					       label="First Name"
					       type="text"/>
			</FormSection>
		)
	}
}

export default Section1;
