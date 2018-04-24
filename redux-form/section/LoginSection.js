import {Field, FormSection} from "redux-form";
import React from "react";
import {renderField} from "../module/renderField";
import {required, verifyEmail, minLength2} from "../module/validation/validationRules";
import verifyValidation from "../module/validation/validateVerifyField";
import {validatePlain} from "../module/validation/validatePlain";


class LoginSection extends React.Component {


	render() {


		return (

			<FormSection name="login">
				<div>
					<label htmlFor="username">username</label>
					<Field name="username"
					       id="username"
					       validate={[required]}
					       component={renderField}
					       type="text"/>
				</div>
				<fieldset>
					<legend>Verify Validation Example</legend>
					<div>
						<label htmlFor="email">email</label>
						<Field name="email"
						       id="email"
						       component={renderField}
						       type="text"/>
					</div>
					<div>
						<label htmlFor="verify_email">verify email</label>
						<Field name="verify_email"
						       id="verify_email"
						       props={{hello: 'test'}}
						       data-hello="yang"
						       validate={[verifyEmail]}
						       component={renderField}
						       type="text"/>
					</div>
				</fieldset>
			</FormSection>
		)
	}
}

export default LoginSection;
