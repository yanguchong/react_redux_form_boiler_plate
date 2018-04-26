import React from 'react';
import {Field} from "redux-form";
import {renderField} from "./renderField"
import {radio_required} from "../module/validation/validationRules";

export const renderRadioGroup = (name, fields) => {

	const renderRadio = (field) => {

		return <div>
			<label>{field.label}</label>
			<div className={field.meta.asyncValidating ? 'async-validating' : ''}>
				<input {...field.input} placeholder={field.label} type={field.type} />
			</div>
		</div>
	};
	const getRadioButton =  (key, value) => {
		return (
			<Field name={name}
				   id={key}
				   value={value}
				   label={key}
				   component={renderRadio}
				   validate={[radio_required]}
				   type="radio"/>
		)
	};

	return <fieldset>
		<legend>Radio Button Required Validation Example</legend>
		<Field name={name}
			   component={renderField}
			   validate={[radio_required]}
			   type="hidden"/>
		{fields.map(f => getRadioButton(f.key, f.value))}
	</fieldset>
};
