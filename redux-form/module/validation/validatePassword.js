import Api from '../../../shared/api/';

function getState(p){
	let newErrors;

	if(p.asyncErrors) {
		newErrors = {
			login: {
				...p.asyncErrors.login,
				password: "password error"
			}
		};
	}
	else {
		newErrors = {
			login: {
				password: "password error"
			}
		};
	}

	return newErrors;
}

const validate = (value, props, resolve) => {
	const state = getState(props);
	const api = Api;

	api.validatePassword({'value': value})
		.then(data => {
			console.log(data);

			//if no errors do nothing
			if (!data.isValid){
				resolve(state);
			}

			resolve();

			//were all good do nothing
		});
};

export default validate;