import Api from '../../../shared/api/';

/*
* getting state and modifying state should always be done in a reducer
* but the way redux form is setup, this this is the best option, at least I think so
*
* also, this is not modifying redux state directly, redux form is taking care of the work, we're just
* setting up a suggestion
*/
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
			if (!data.isValid){
				resolve(state);
			}

			resolve();

			//were all good do nothing
		});
};

export default validate;