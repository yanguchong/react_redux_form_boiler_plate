const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (v, d, p, f) => {

	return new Promise((resolve, reject)=> {

		let newErrors;

		if (f === "login.username") {

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
		}
		else {
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
		}

		resolve(newErrors);

		/* if no errors, return nothing*/
		//resolve();
	});

	// return sleep(1000).then(() => {
	// 	throw {"login.username" : "pseudo error"};
	// 	// simulate server latency
	// 	// if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
	// 	// 	throw { username: 'That username is taken' }
	// 	// }
	// })
};

export default asyncValidate;
