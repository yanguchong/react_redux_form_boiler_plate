import React from 'react';
import {debug} from "../Logger";

export const renderField = (field) => {

	return <div>
		<label>{field.label}</label>
		<div className={field.meta.asyncValidating ? 'async-validating' : ''}>
			<input {...field.input} placeholder={field.label} type={field.type} />
			{field.meta.touched &&
			((field.meta.error && <span>{field.meta.error}</span>) ||
				(field.meta.warning && <span>{field.meta.warning}</span>))}
		</div>
	</div>
};
