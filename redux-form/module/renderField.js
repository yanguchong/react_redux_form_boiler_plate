import React from 'react';

export const renderField = (
	{
		input,
		label,
		type,
		meta:{asyncValidating, touched, error, warning}
	}) => {
	return <div>
		<label>{label}</label>
		<div className={asyncValidating ? 'async-validating' : ''}>
			<input {...input} placeholder={label} type={type} />
			{touched &&
			((error && <span>{error}</span>) ||
				(warning && <span>{warning}</span>))}
		</div>
	</div>
};
