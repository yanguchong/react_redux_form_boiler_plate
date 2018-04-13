import Api from '../../../shared/api/';


function getState(p){
	let newErrors;

	if (p.asyncErrors) {
		newErrors = {
			login: {
				...p.asyncErrors.login,
				username: "username error"
			}
		};
	}
	else {
		newErrors = {
			login: {
				username: "username error"
			}
		};
	}

	return newErrors;
}

const validate = (value, props, resolve) => {
	const state = getState(props);
	const api = Api;

	api.validateUsername({'value': value})
		.then(data => {
			console.log(data);

			//if no errors do nothing
			if (data.isValid){
				resolve(state);
			}

			//were all good do nothing
		});
};

export default validate;