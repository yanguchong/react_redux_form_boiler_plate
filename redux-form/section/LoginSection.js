import {Field, FormSection} from "redux-form";
import React from "react";
import {renderField} from "../module/renderField";
import {required} from "../module/validation/validationRules";


class LoginSection extends React.Component {
	render() {
		return (

			<FormSection name="login">
				<div>
					<label htmlFor="username">username</label>
					<Field name="username"
					       id="username"
					       component={renderField}
					       type="text"/>
				</div>
				<div>
					<label htmlFor="password">password</label>
					<Field name="password"
					       id="password"
					       component={renderField}
					       type="text"/>
				</div>
			</FormSection>
		)
	}
}

export default LoginSection;
