import {Field, FormSection} from "redux-form";
import React from "react";


class LoginSection extends React.Component {
	render() {
		return (
			<FormSection name="login">
				<div>
					<label htmlFor="username">username</label>
					<Field name="username" id="username" component="input" type="text"/>
				</div>
				<div>
					<label htmlFor="password">password</label>
					<Field name="password" id="password" component="input" type="text"/>
				</div>
			</FormSection>
		)
	}
}

export default LoginSection;
